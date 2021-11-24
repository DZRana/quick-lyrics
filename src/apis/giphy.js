import axios from "axios";

const api_key = process.env.REACT_APP_GIPHY_API_KEY;

export default axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key,
  },
});
