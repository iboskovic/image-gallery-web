import Gallery from "../../components/Gallery/Gallery";
import Modal from "../../components/Modal/Modal";
import Nav from "../../components/Nav/Nav";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { images } = useFetch();
  return (
    <div className="main">
      <Nav isHome />
      <Gallery images={images} />
      <Modal isOpen={false} />
    </div>
  );
};

export default Home;
