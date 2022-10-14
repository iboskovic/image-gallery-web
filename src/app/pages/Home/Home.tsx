import EmptyState from "../../components/EmptyState";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal/Modal";
import Nav from "../../components/Nav/Nav";
import SingleImage from "../../components/SingleImage";
import { Image } from "../../types/Image";
import useHome from "./Home.logic";

const Home = () => {
  const { likedImage, setLikedImage, images, isLoading } = useHome();

  return (
    <div className="main">
      <Nav isHome />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {images && images.length > 0 ? (
            <div className="gallery">
              {images.map((image: Image) => (
                <>
                  <SingleImage
                    key={image.id}
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
