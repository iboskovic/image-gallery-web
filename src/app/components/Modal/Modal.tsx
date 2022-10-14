import { Image } from "../../types/Image";
import useModal from "./Modal.logic";

interface Props {
  image: Image;
  handleClose: () => void;
}
const Modal: React.FC<Props> = (props) => {
  const { image, handleClose } = props;

  const { ref, isLiked, handleLike } = useModal(image, handleClose);

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
