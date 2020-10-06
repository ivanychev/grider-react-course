import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const resp = await youtube.get("/search", {
      q: term,
    });
    setVideos(resp.data.items);
  };

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  return [videos, search];
};

export default useVideos;
