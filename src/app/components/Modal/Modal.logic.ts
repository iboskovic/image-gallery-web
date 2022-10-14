import { useRef } from "react";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { removeLikedImage, setImages } from "../../slices/likedImagesSlice";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../utils/reduxHooks";
import { Image } from "../../types/Image";

const useModal = (image: Image, handleClose: () => void) => {
  const dispatch = useAppDispatch();
  const likedImages = useAppSelector(
    (state: RootState) => state.likedImages.likedImages
  );
  const isLiked = likedImages.find((img: Image) => img.id === image.id);

  const ref = useRef<HTMLDivElement>(null);

  useOutsideAlerter(ref, handleClose);

  const handleLike = (image: Image) => {
    if (isLiked) {
      dispatch(removeLikedImage(image));
    } else {
      dispatch(setImages(image));
    }
  };
  return { ref, isLiked, handleLike };
};

export default useModal;
