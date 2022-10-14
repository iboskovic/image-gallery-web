import { removeLikedImage, setImages } from "../../slices/likedImagesSlice";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../utils/reduxHooks";
import { Image } from "../../types/Image";

const useOverlay = (image: Image) => {
  const dispatch = useAppDispatch();
  const likedImages = useAppSelector(
    (state: RootState) => state.likedImages.likedImages
  );
  const isLiked = likedImages.find((img: Image) => img.id === image?.id);
  const handleLike = (image: Image) => {
    if (isLiked) {
      dispatch(removeLikedImage(image));
    } else {
      dispatch(setImages(image));
    }
  };
  return { handleLike, isLiked };
};

export default useOverlay;
