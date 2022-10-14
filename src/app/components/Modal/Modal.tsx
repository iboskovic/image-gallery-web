import { useRef } from "react";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { removeLikedImage, setImages } from "../../slices/likedImagesSlice";
import { RootState } from "../../store";
import { Image } from "../../types/Image";
import { useAppDispatch, useAppSelector } from "../../utils/reduxHooks";

interface Props {
  image: Image;
  handleClose: () => void;
}
const Modal: React.FC<Props> = (props) => {
  const { image, handleClose } = props;
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
  return (
    <div className="modal">
      <div className="modal__content" ref={ref}>
        <div className="modal__header">
          <i className="icon icon--base icon--close" onClick={handleClose}></i>
        </div>
        <div className="modal__body">
          <img className="img" src={image.largeImageURL} alt="img" />
          <i
            className={`icon icon--xxl icon--heart-${
              isLiked ? "red icon--red" : "transparent"
            } modal__body--center`}
            onClick={() => handleLike(image)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Modal;
