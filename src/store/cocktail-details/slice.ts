import { createSlice } from "@reduxjs/toolkit";
import { loadCocktailDetails } from "./actions.js";
import { DataStatus } from "../../enums/enums.js";
import { CocktailDetails } from "../../types/cocktail-details.type.js";

type State = {
  details: CocktailDetails | undefined;
  dataStatus: DataStatus;
  currentId: string | null;
};

const initialState: State = {
  details: undefined,
  dataStatus: DataStatus.IDLE,
  currentId: 'null',
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: "cocktailDetails",
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadCocktailDetails.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(loadCocktailDetails.fulfilled, (state, action) => {
      state.details = action.payload.drinks[0];
      state.dataStatus = DataStatus.FULFILLED;
    });
    builder.addCase(loadCocktailDetails.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    });
  },
});

export { actions, name, reducer };
