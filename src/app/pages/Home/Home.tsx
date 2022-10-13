/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import EmptyState from "../../components/EmptyState/EmptyState";
import Modal from "../../components/Modal/Modal";
import Nav from "../../components/Nav/Nav";
import { imgValues } from "../../constants/imgValues";
import useFetch from "../../hooks/useFetch";
import { Image } from "../../types/Image";

const Home = () => {
  const [likedImage, setLikedImage] = useState<Image | null>(null);

  const { fetch, images, searchTerm } = useFetch();

  useEffect(() => {
    fetch();
  }, [searchTerm]);
  return (
    <div className="main">
      <Nav isHome />

      {images && images.length > 0 ? (
        <div className={`gallery ${likedImage && "gallery--locked"}`}>
          {images.map((image: Image) => (
            <div
              onClick={() => setLikedImage(image)}
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
              />
            </div>
          ))}
        </div>
      ) : (
        <EmptyState title="There are no images to show." />
      )}
      {likedImage && (
        <Modal image={likedImage} handleClose={() => setLikedImage(null)} />
      )}
    </div>
  );
};

export default Home;
