import { Image } from "../../types/Image";
import useOverlay from "./Overlay.logic";

interface Props {
  onClick: () => void;
  image: Image;
}
const Overlay: React.FC<Props> = (props) => {
  const { onClick, image } = props;
  const { handleLike, isLiked } = useOverlay(image);

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
