import Gallery from "../../components/Gallery/Gallery";
import Modal from "../../components/Modal/Modal";
import Nav from "../../components/Nav/Nav";

const Home = () => {
  return (
    <div className="main">
      <Nav isHome />
      <Gallery />
      <Modal isOpen={false} />
    </div>
  );
};

export default Home;
