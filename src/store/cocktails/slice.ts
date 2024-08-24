import { createSlice } from "@reduxjs/toolkit";
import { loadAll } from "./actions.js";
import { DataStatus } from "../../enums/enums.js";

type State = {
  collection: any;
  dataStatus: DataStatus;
};

const initialState: State = {
  collection: undefined,
  dataStatus: DataStatus.IDLE,
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: "cocktails",
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadAll.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(loadAll.fulfilled, (state, action) => {
      state.collection = action.payload.drinks;
      state.dataStatus = DataStatus.FULFILLED;
    });
    builder.addCase(loadAll.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    });
  },
});

export { actions, name, reducer };
