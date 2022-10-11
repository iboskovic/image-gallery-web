interface Props {
  isOpen: boolean;
}
const Modal: React.FC<Props> = (props) => {
  const { isOpen } = props;
  return (
    <div className={`modal${isOpen ? "" : "--closed"}`}>
      <div className="modal__content">
        <div className="modal__header">
          <i className="icon icon--base icon--close"></i>
        </div>
        <div className="modal__body">
          <img
            className="img"
            src={require("../../assets/images/testImage.jpg")}
            alt="test"
          />
          <i className="icon icon--xxl icon--heart-transparent modal__body--center"></i>
        </div>
      </div>
    </div>
  );
};

export default Modal;
