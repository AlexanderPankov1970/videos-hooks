import { useState, useEffect } from "react";
import youtube from "../api/youtube";

//Custom HOOK:
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm); //Name: onTermSubmit changed to Name:search
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };
  return [videos, search]; //можно возвращать или массив(Reakt Convention)  или объект (JS convention)
};

export default useVideos;
