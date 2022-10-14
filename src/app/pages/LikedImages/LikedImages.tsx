import Nav from "../../components/Nav/Nav";
import { RootState } from "../../store";
import { useAppSelector } from "../../utils/reduxHooks";
import { Image } from "../../types/Image";
import Modal from "../../components/Modal/Modal";
import EmptyState from "../../components/EmptyState/EmptyState";
import useLikedImages from "./LikedImages.logic";
import SingleImage from "../../components/SingleImage";

const LikedImages = () => {
  const { likedImage, setLikedImage } = useLikedImages();

  const likedImages = useAppSelector(
    (state: RootState) => state.likedImages.likedImages
  );

  return (
    <div className="main">
      <Nav isHome={false} />
      {likedImages && likedImages.length > 0 ? (
        <div className="gallery">
          {likedImages.map((image: Image) => (
            <SingleImage
              image={image}
              setLikedImage={() => setLikedImage(image)}
            />
          ))}
        </div>
      ) : (
        <EmptyState title="You did not like any images." />
      )}
      {likedImage && (
        <Modal image={likedImage} handleClose={() => setLikedImage(null)} />
      )}
    </div>
  );
};

export default LikedImages;
