// https://redux-toolkit.js.org/tutorials/quick-start

import { themeReducer } from "@/store/slices";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api";
import { authReducer } from "./slices/auth-slice";

const persistConfig = {
  key: "root",
  /**
   * @see https://github.com/rt2zz/redux-persist#storage-engines
   * @see https://stackoverflow.com/q/66156454/18459116
   */
  storage,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const persistor = persistStore(store);

// https://redux-toolkit.js.org/rtk-query/api/setupListeners
setupListeners(store.dispatch);

export default store;
