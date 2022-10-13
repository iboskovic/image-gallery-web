import { Image } from "../types/Image";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  likedImages: Image[];
  likedImagesCount: number;
  isLiked: boolean;
}

const initialState: State = {
  likedImages: [],
  likedImagesCount: 0,
  isLiked: false,
};

const likedImagesSlice = createSlice({
  name: "likedImages",
  initialState,
  reducers: {
    setImages(state, action: PayloadAction<Image>) {
      state.likedImages = [...state.likedImages, action.payload];
    },

    removeLikedImage(state, action: PayloadAction<Image>) {
      state.likedImages = state.likedImages.filter(
        (image: Image) => image.id !== action.payload.id
      );
    },
  },
});

export const { setImages, removeLikedImage } = likedImagesSlice.actions;
export default likedImagesSlice.reducer;
