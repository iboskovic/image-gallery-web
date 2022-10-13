import { NavLink } from "react-router-dom";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../utils/reduxHooks";
import { setSearchTerm } from "../../slices/searchSlice";

interface Props {
  isHome: boolean;
}
const Nav: React.FC<Props> = (props) => {
  const { isHome } = props;
  const likedImages = useAppSelector(
    (state: RootState) => state.likedImages.likedImages
  );
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const homePageNav = () => {
    return (
      <>
        <div></div>

        <div className="field">
          {/* Didn't make input a single component since it is not used anywhere else */}
          <input
            type="text"
            placeholder="Example: 'yellow+flower'"
            className="input input--base input--primary w--500"
            onChange={(e) => handleSearch(e)}
          />
          <i className="icon icon--base icon--search input--icon"></i>
        </div>

        <div className="field">
          <NavLink to={"/liked-images"}>
            <i className={"icon icon--lg icon--heart"}></i>
          </NavLink>
          {likedImages.length > 0 && (
            <div className="notification">{likedImages.length}</div>
          )}
        </div>
      </>
    );
  };

  const likedImagesNav = () => {
    return (
      <>
        <div className="title--primary">Liked images</div>
        <NavLink to={"/"}>
          <i className="icon icon--lg icon--home"></i>
        </NavLink>
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
