import Nav from "../../components/Nav/Nav";
import { RootState } from "../../store";
import { useAppSelector } from "../../utils/reduxHooks";
import { Image } from "../../types/Image";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import EmptyState from "../../components/EmptyState/EmptyState";
import { imgValues } from "../../constants/imgValues";

const LikedImages = () => {
  const likedImages = useAppSelector(
    (state: RootState) => state.likedImages.likedImages
  );
  const [likedImage, setLikedImage] = useState<Image | null>(null);

  return (
    <div className="main">
      <Nav isHome={false} />
      {likedImages && likedImages.length > 0 ? (
        <div className="gallery">
          {likedImages.map((image: Image) => (
            <div
              onClick={() => setLikedImage({ ...image })}
              key={image.id}
              className={`gallery__overlay ${
                image.webformatWidth >= imgValues.minWidth &&
                "gallery--col-span--2 "
              } ${
                image.webformatHeight >= imgValues.minHeight &&
                "gallery--row-span--2"
              }`}
            >
              <img
                className="gallery__image"
                src={`${image.largeImageURL}`}
                alt="img"
                onClick={() => console.log(image.id)}
              />
            </div>
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
