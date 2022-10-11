import Gallery from "../../components/Gallery/Gallery";
import Nav from "../../components/Nav/Nav";

const Home = () => {
  return (
    <div className="main">
      <Nav isHome />
      <Gallery />
    </div>
  );
};

export default Home;
