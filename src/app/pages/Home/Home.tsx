/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import EmptyState from "../../components/EmptyState/EmptyState";
import Modal from "../../components/Modal/Modal";
import Nav from "../../components/Nav/Nav";
import SingleImage from "../../components/SingleImage";
import useFetch from "../../hooks/useFetch";
import { Image } from "../../types/Image";
import useHome from "./Home.logic";

const Home = () => {
  const { likedImage, setLikedImage } = useHome();

  const { fetch, images, searchTerm, isLoading } = useFetch();

  useEffect(() => {
    fetch();
  }, [searchTerm]);

  return (
    <div className="main">
      <Nav isHome />
      {isLoading ? (
        <>Loading</>
      ) : (
        <>
          {images && images.length > 0 ? (
            <div className="gallery">
              {images.map((image: Image) => (
                <>
                  <SingleImage
                    image={image}
                    setLikedImage={() => setLikedImage(image)}
                  />
                </>
              ))}
            </div>
          ) : (
            <EmptyState title="There are no images to show." />
          )}
        </>
      )}

      {likedImage && (
        <Modal image={likedImage} handleClose={() => setLikedImage(null)} />
      )}
    </div>
  );
};

export default Home;
