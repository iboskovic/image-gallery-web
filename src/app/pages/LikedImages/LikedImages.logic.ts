import { useState } from "react";
import { RootState } from "../../store";
import { Image } from "../../types/Image";
import { useAppSelector } from "../../utils/reduxHooks";

const useLikedImages = () => {
  const [likedImage, setLikedImage] = useState<Image | null>(null);
  const likedImages = useAppSelector(
    (state: RootState) => state.likedImages.likedImages
  );

  return { likedImage, setLikedImage, likedImages };
};

export default useLikedImages;
