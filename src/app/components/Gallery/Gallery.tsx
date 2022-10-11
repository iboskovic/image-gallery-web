import Overlay from "../Overlay/Overlay";
interface Props {
  images: any;
}
const Gallery: React.FC<Props> = (props) => {
  const { images } = props;
  return (
    <>
      <div className="gallery">
        {images.map((image: any) => (
          <div
            className={`gallery__overlay ${
              image.webformatWidth >= 640 && "gallery--col-span--2 "
            } ${image.webformatHeight >= 400 && "gallery--row-span--2"}`}
          >
            <img
              className="gallery__image"
              src={`${image.largeImageURL}`}
              alt="test"
            />
            <Overlay />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
