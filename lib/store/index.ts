import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { propertyReducer } from "@/lib/store/slices/propertiesSlice";

export const store = configureStore({
  reducer: combineReducers({
    properties: propertyReducer,
  }),
});
