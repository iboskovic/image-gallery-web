import { removeLikedImage, setImages } from "../../slices/likedImagesSlice";
import { RootState } from "../../store";
import { Image } from "../../types/Image";
import { useAppDispatch, useAppSelector } from "../../utils/reduxHooks";

interface Props {
  onClick: () => void;
  image: Image;
}
const Overlay: React.FC<Props> = (props) => {
  const { onClick, image } = props;
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
  return (
    <div className="overlay">
      <div className="overlay__header">
        <i className="icon icon--xxl icon--expand" onClick={onClick}></i>
      </div>
      <div className="overlay__body">
        <i
          className={`icon icon--xxl icon--heart-${
            isLiked ? "red icon--red" : "transparent"
          }`}
          onClick={() => handleLike(image)}
        ></i>
      </div>
    </div>
  );
};

export default Overlay;
