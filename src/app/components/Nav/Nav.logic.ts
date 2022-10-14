import { setSearchTerm } from "../../slices/searchSlice";
import { RootState } from "../../store";
import { useAppSelector, useAppDispatch } from "../../utils/reduxHooks";

const useNav = () => {
  const likedImages = useAppSelector(
    (state: RootState) => state.likedImages.likedImages
  );
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return { likedImages, handleSearch };
};

export default useNav;
