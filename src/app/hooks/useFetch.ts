/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ImageService } from "../services/imageService";

const useFetch = () => {
  const [images, setImages] = useState([]);
  const imageService = new ImageService();

  const fetch = async () => {
    const res = await imageService.getImages("");
    setImages(res.hits);
  };

  useEffect(() => {
    fetch();
  }, []);

  return { images };
};

export default useFetch;
