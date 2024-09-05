import { loadCocktailDetails } from "./actions.js";
import { actions } from "./slice.js";

const allActions = {
  ...actions,
  loadCocktailDetails,
};

export { allActions as actions };
export { reducer } from "./slice.js";
