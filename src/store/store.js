import { configureStore } from "@reduxjs/toolkit";
import cvReducer from "./cvSlice";

export default configureStore({
  reducer: {
    cv: cvReducer,
  },
});
