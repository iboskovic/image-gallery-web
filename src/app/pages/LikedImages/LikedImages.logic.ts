import { useState } from "react";
import { Image } from "../../types/Image";

const useLikedImages = () => {
  const [likedImage, setLikedImage] = useState<Image | null>(null);

  return { likedImage, setLikedImage };
};

export default useLikedImages;
