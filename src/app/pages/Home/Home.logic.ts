import { useState } from "react";
import { Image } from "../../types/Image";

const useHome = () => {
  const [likedImage, setLikedImage] = useState<Image | null>(null);

  return { likedImage, setLikedImage };
};

export default useHome;
