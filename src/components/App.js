import React, { useState, useEffect } from "react";
import spotify from "spotify-web-api-js";
import giphy from "../apis/giphy";
import spotifyAuth from "../apis/spotifyAuth";
import Lyrics from "./Lyrics";
import Player from "./Player";

const App = () => {
  const spotifyApi = new spotify();
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_API_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_API_CLIENT_SECRET;
  const redirect_uri = "https://dzrana.github.io/quick-lyrics/";
  const redirect_uri_local = "http://localhost:3000/";
  const response_type = "code";
  const scope =
    "user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming";
  const generateRandomString = () => {
    return Math.random().toString(20).substr(2, 16);
  };
  const state = generateRandomString();
  const signInUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}&response_type=${response_type}`;

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get("code");

  const [spotifyInstance, setSpotifyInstance] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [spotifyStatus, setSpotifyStatus] = useState(false);

  const [gifUrl, setGifUrl] = useState(null);

  const spotifySetup = async () => {
    const token = await spotifyAuth.post(
      "/api/token",
      `grant_type=authorization_code&code=${code}&redirect_uri=${redirect_uri}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );

    spotifyApi.setAccessToken(token.data.access_token);
    setSpotifyInstance(spotifyApi);

    const getCurrentTrack = (prevSongId = "") => {
      spotifyApi.getMyCurrentPlayingTrack((err, data) => {
        if (err) console.error(err);
        else {
          if (data && data.item.id !== null) {
            setSpotifyStatus(true);
            if (prevSongId === "") {
              setCurrentTrack(data);
              getCurrentTrack(data.item.id);
            } else {
              setTimeout(() => {
                if (prevSongId !== data.item.id) {
                  setCurrentTrack(data);
                  getCurrentTrack(data.item.id);
                } else getCurrentTrack(data.item.id);
              }, 10000);
            }
          } else setSpotifyStatus(false);
        }
      });
    };

    getCurrentTrack();
  };

  const renderSignIn = () => {
    return (
      <div className="flex h-screen">
        <a
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-auto"
          href={signInUrl}
        >
          Sign In
        </a>
      </div>
    );
  };

  useEffect(() => {
    if (code !== null) spotifySetup();
  }, []);

  const getGifUrl = async () => {
    const gif = await giphy.get("/search", {
      params: {
        q: "anime aesthetic",
      },
    });

    setGifUrl(
      gif.data.data[Math.floor(Math.random() * 50)].images.original.url
    );
  };

  useEffect(() => {
    getGifUrl();
  }, [currentTrack]);

  return code === null ? (
    renderSignIn()
  ) : !spotifyStatus ? (
    <div className="text-white flex h-screen">
      <div className="m-auto">
        Open Spotify App, Play a Song, then{" "}
        <a
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          href={redirect_uri}
        >
          Log Back In
        </a>
      </div>
    </div>
  ) : !currentTrack ? (
    <div className="flex h-screen">
      <div className="m-auto">LOADING</div>
    </div>
  ) : (
    <div
      className="text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${gifUrl})`,
      }}
    >
      <div className="flex relative bg-gray-800 bg-opacity-60">
        <aside className="h-screen sticky top-0 pl-24 pt-8 md:pr-24 sm:pr-12">
          <Player
            spotifyInstance={spotifyInstance}
            currentTrack={currentTrack}
          />
        </aside>
        <main className="m-auto">
          <Lyrics currentTrack={currentTrack} />
        </main>
      </div>
    </div>
  );
};

export default App;
