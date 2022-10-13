import { ImageService } from "../services/imageService";
import { Image } from "../types/Image";
import { useState } from "react";
import { useAppSelector } from "../utils/reduxHooks";
import { RootState } from "../store";

const useFetch = () => {
  const imageService = new ImageService();
  const [images, setImages] = useState<Image[]>();
  const searchTerm = useAppSelector(
    (state: RootState) => state.searchTerm.searchTerm
  );

  const fetch = async () => {
    try {
      const res = await imageService.getImages(searchTerm);
      setImages(res.hits);
    } catch (error) {
      console.error(error);
    }
  };
  return { fetch, images, searchTerm };
};

export default useFetch;
