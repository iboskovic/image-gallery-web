import Nav from "../../components/Nav/Nav";

const Home = () => {
  return (
    <div className="home">
      <Nav isHome />

      <div className="gallery">
        <img
          className="gallery__image"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
        <img
          className="gallery__image gallery__image--row-span--2"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
        <img
          className="gallery__image gallery__image--col-span--2 gallery__image--row-span--2"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
        <img
          className="gallery__image"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
        <img
          className="gallery__image"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
        <img
          className="gallery__image"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
        <img
          className="gallery__image"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
        <img
          className="gallery__image"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
        <img
          className="gallery__image"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
        <img
          className="gallery__image"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
        <img
          className="gallery__image"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
        <img
          className="gallery__image"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
        <img
          className="gallery__image"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
        <img
          className="gallery__image"
          src={require("../../assets/images/testImage.jpg")}
          alt="test"
        />
      </div>
    </div>
  );
};

export default Home;
