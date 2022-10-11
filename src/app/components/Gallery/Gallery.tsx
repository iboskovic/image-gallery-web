import Overlay from "../Overlay/Overlay";

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="gallery__overlay">
          <img
            className="gallery__image"
            src={require("../../assets/images/testImage.jpg")}
            alt="test"
          />
          <Overlay />
        </div>
        <div className="gallery__overlay gallery--row-span--2">
          <img
            className="gallery__image "
            src={require("../../assets/images/testImage.jpg")}
            alt="test"
          />
          <Overlay />
        </div>
        <div className="gallery__overlay gallery--col-span--2 gallery--row-span--2">
          <img
            className="gallery__image"
            src={require("../../assets/images/testImage.jpg")}
            alt="test"
          />
          <Overlay />
        </div>
        <div className="gallery__overlay">
          <img
            className="gallery__image"
            src={require("../../assets/images/testImage.jpg")}
            alt="test"
          />
          <Overlay />
        </div>
        <div className="gallery__overlay">
          <img
            className="gallery__image"
            src={require("../../assets/images/testImage.jpg")}
            alt="test"
          />
          <Overlay />
        </div>
        <div className="gallery__overlay">
          <img
            className="gallery__image"
            src={require("../../assets/images/testImage.jpg")}
            alt="test"
          />
          <Overlay />
        </div>
        <div className="gallery__overlay">
          <img
            className="gallery__image"
            src={require("../../assets/images/testImage.jpg")}
            alt="test"
          />
          <Overlay />
        </div>
        <div className="gallery__overlay">
          <img
            className="gallery__image"
            src={require("../../assets/images/testImage.jpg")}
            alt="test"
          />
          <Overlay />
        </div>
      </div>
    </>
  );
};

export default Gallery;
