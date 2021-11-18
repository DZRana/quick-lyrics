import React from "react";

const Player = ({ spotifyInstance, currentTrack }) => {
  const { name: trackName, artists } = currentTrack.item;
  const { name: albumName, images } = currentTrack.item.album;

  const previous = () => {
    spotifyInstance.skipToPrevious((err, data) => {
      if (err) console.error(err);
      else return;
    });
  };

  const pause = () => {
    spotifyInstance.pause((err, data) => {
      if (err) console.error(err);
      else return;
    });
  };

  const reset = () => {
    spotifyInstance.seek(0, (err, data) => {
      if (err) console.error(err);
      else return;
    });
  };

  const play = () => {
    spotifyInstance.play((err, data) => {
      if (err) console.error(err);
      else return;
    });
  };

  const next = () => {
    spotifyInstance.skipToNext((err, data) => {
      if (err) console.error(err);
      else return;
    });
  };

  return (
    <div>
      <img alt={albumName} src={images[0].url} />
      <div>
        {trackName}
        <br />
        {artists.map((artist, i) => {
          if (i + 1 !== artists.length) return `${artist.name}, `;
          else return `${artist.name}`;
        })}
        <br />
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded"
          onClick={() => previous()}
        >
          Prev
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
          onClick={() => pause()}
        >
          Pause
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded"
          onClick={() => reset()}
        >
          Reset
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => play()}
        >
          Play
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded"
          onClick={() => next()}
        >
          Next
        </button>
        <p>
          *Please wait a minimum of 10 seconds for song/lyrics to reflect new
          song. (Polling rate: once per 10s)
        </p>
      </div>
    </div>
  );
};

export default Player;
