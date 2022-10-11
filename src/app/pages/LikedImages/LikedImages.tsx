import Gallery from "../../components/Gallery/Gallery";
import Nav from "../../components/Nav/Nav";

const LikedImages = () => {
  return (
    <div className="main">
      <Nav isHome={false} />
      <Gallery />
    </div>
  );
};

export default LikedImages;
