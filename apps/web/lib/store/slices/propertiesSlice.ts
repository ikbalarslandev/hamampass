import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TApiResponse } from "@hamampass/db/types";

const initialState: {
  propertyState: TApiResponse;
} = {
  propertyState: {
    all_items: 0,
    page: 0,
    max_page: 0,
    limit: 0,
    data: [],
  },
};

export const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setPropertyState: (state, action: PayloadAction<TApiResponse>) => {
      state.propertyState = action.payload;
    },
  },
});

export const { setPropertyState } = propertySlice.actions;
export const propertyReducer = propertySlice.reducer;
