import axios from "axios";

const KEY = "AIzaSyBEku8ikEt_-3VuarX_W2YvwKWDIzo0TpM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

//youtube.get("/search");
