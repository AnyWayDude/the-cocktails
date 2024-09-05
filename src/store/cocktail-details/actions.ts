// store/cocktailDetails/actions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CocktailDetailsResponse } from "../../types/api/cocktail-details-response.type";
import { name as sliceName } from "./slice";
import { AsyncThunkConfig } from "../../types/async-thunk-config.type";

const PATH = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const loadCocktailDetails = createAsyncThunk<
  CocktailDetailsResponse,
  string,
  AsyncThunkConfig
>(`${sliceName}/loadCocktailDetails`, async (id, { extra }) => {
  const response = await extra.http.load(`${PATH}${id}`);

  return await response.json();
});

export { loadCocktailDetails };
