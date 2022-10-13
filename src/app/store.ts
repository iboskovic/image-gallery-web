import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
  PAUSE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import likedImagesReducer from "./slices/likedImagesSlice";
import searchReducer from "./slices/searchSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["likedImages"],
};

const rootReducer = combineReducers({
  likedImages: likedImagesReducer,
  searchTerm: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
