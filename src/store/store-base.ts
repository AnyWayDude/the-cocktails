import {
  type ThunkMiddleware,
  type Tuple,
  type UnknownAction,
} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { config as Config } from "../config/config.js";
import { reducer as cocktailsReducer } from "./cocktails/cocktails.js";
import { reducer as cocktailDetailsReducer } from "./cocktail-details/coctail-details.js";
import { http } from "../http/http.js";

type RootReducer = {
  cocktails: ReturnType<typeof cocktailsReducer>;
  cocktailDetails: ReturnType<typeof cocktailDetailsReducer>;
};

type ExtraArguments = {
  http: typeof http;
};

class Store {
  public instance: ReturnType<
    typeof configureStore<
      RootReducer,
      UnknownAction,
      Tuple<[ThunkMiddleware<RootReducer, UnknownAction, ExtraArguments>]>
    >
  >;

  public constructor(config: typeof Config) {
    this.instance = configureStore({
      devTools: config.ENV.APP.ENVIRONMENT !== "production",
      reducer: {
        cocktails: cocktailsReducer,
        cocktailDetails: cocktailDetailsReducer,
      },
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
          thunk: {
            extraArgument: this.extraArguments,
          },
        });
      },
    });
  }

  public get extraArguments(): ExtraArguments {
    return {
      http,
    };
  }
}

export { Store };
