import React, { useState, useEffect } from "react";
import spotify from "spotify-web-api-js";
import spotifyAuth from "../apis/spotifyAuth";
import Lyrics from "./Lyrics";
import Player from "./Player";

const App = () => {
  const spotifyApi = new spotify();
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_API_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_API_CLIENT_SECRET;
  const redirect_uri = "http://localhost:3000/";
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
          if (data) {
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
      <div>
        <a
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
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

  return code === null ? (
    renderSignIn()
  ) : !spotifyStatus ? (
    <div className="text-white">
      Open Spotify App, Play a Song, then{" "}
      <a className="hover:underline" href={redirect_uri}>
        Log Back In
      </a>
    </div>
  ) : !currentTrack ? (
    <div>LOADING</div>
  ) : (
    <div className="text-white grid grid-cols-2">
      <Player spotifyInstance={spotifyInstance} currentTrack={currentTrack} />
      <Lyrics currentTrack={currentTrack} />
    </div>
  );
};

export default App;
