import { imgValues } from "../constants/imgValues";
import { Image } from "../types/Image";
import Overlay from "./Overlay/Overlay";

interface Props {
  image: Image;
  setLikedImage: () => void;
}
const SingleImage: React.FC<Props> = (props) => {
  const { image, setLikedImage } = props;
  return (
    <div
      key={image.id}
      className={`gallery__overlay ${
        image.webformatWidth >= imgValues.minWidth && "gallery--col-span--2 "
      } ${
        image.webformatHeight >= imgValues.minHeight && "gallery--row-span--2"
      }`}
    >
      <img
        className="gallery__image"
        src={`${image.largeImageURL}`}
        alt="img"
      />
      <Overlay onClick={setLikedImage} image={image} />
    </div>
  );
};

export default SingleImage;
