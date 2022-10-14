import { ImageService } from "../services/imageService";
import { Image } from "../types/Image";
import { useState } from "react";
import { useAppSelector } from "../utils/reduxHooks";
import { RootState } from "../store";

const useFetch = () => {
  const imageService = new ImageService();
  const [images, setImages] = useState<Image[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchTerm = useAppSelector(
    (state: RootState) => state.searchTerm.searchTerm
  );

  const fetch = async () => {
    try {
      setIsLoading(true);
      const res = await imageService.getImages(searchTerm);
      setImages(res.hits);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  return { fetch, images, searchTerm, isLoading };
};

export default useFetch;
