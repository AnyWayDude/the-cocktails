import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoadAllResponse, type AsyncThunkConfig } from "../../types/types.js";
import { name as sliceName } from "./slice.js";

const PATH =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";

const loadAll = createAsyncThunk<LoadAllResponse, undefined, AsyncThunkConfig>(
  `${sliceName}/loadAll`,
  async (_, { extra }) => {
    const response = await extra.http.load(PATH);

    return await response.json();
  }
);

export { loadAll };
