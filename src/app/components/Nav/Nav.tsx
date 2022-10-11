import localText from "../../pages/LikedImages/LikedImages.static";

interface Props {
  isHome: boolean;
}
const Nav: React.FC<Props> = (props) => {
  const { isHome } = props;

  const homePageNav = () => {
    return (
      <>
        <div></div>

        <div className="field">
          {/* Didn't make input a single component since it is not used anywhere else */}
          <input
            type="text"
            placeholder="Search..."
            className="input input--base input--primary w--500"
          />
          <i className="icon icon--base icon--search input--icon"></i>
        </div>

        <div className="field">
          <i className="icon icon--lg icon--heart"></i>
          <div className="notification">3</div>
        </div>
      </>
    );
  };

  const likedImagesNav = () => {
    return (
      <>
        <div className="title--primary">{localText.titlePrimary}</div>
        <i className="icon icon--lg icon--home"></i>
      </>
    );
  };

  return (
    <div className="flex flex--jc--sb">
      {isHome ? homePageNav() : likedImagesNav()}
    </div>
  );
};

export default Nav;
