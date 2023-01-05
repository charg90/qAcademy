import { useState, useEffect } from "react";
import { videosStorage } from "../FireBase/videosStorage";
const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchVideos = async () => {
    try {
      const url = await videosStorage();
      setVideos(url);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  return [videos, loading, error];
};

export default useVideos;
