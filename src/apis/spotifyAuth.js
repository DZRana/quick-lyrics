import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_API_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_API_CLIENT_SECRET;

export default axios.create({
  baseURL: "https://accounts.spotify.com",
  headers: {
    Authorization:
      "Basic " +
      Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
