import React, { useState, useEffect } from "react";
import { getLyrics } from "genius-lyrics-api";

const Lyrics = ({ currentTrack }) => {
  const [currentLyrics, setCurrentLyrics] = useState("LOADING");
  const { name, artists } = currentTrack.item;

  useEffect(() => {
    const options = {
      apiKey: process.env.REACT_APP_GENIUS_API_KEY,
      title: name,
      artist: artists[0].name,
      optimizeQuery: true,
    };
    getLyrics(options).then((lyrics) => {
      setCurrentLyrics(lyrics);
    });
  }, [currentTrack]);

  return currentLyrics === null ? (
    <p>NO LYRICS AVAILABLE</p>
  ) : (
    <pre className="whitespace-pre-wrap">{currentLyrics}</pre>
  );
};

export default Lyrics;
