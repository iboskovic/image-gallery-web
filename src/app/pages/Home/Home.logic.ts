/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Image } from "../../types/Image";

const useHome = () => {
  const [likedImage, setLikedImage] = useState<Image | null>(null);
  const { fetch, images, searchTerm, isLoading } = useFetch();

  useEffect(() => {
    fetch();
  }, [searchTerm]);
  return { likedImage, setLikedImage, images, isLoading };
};

export default useHome;
