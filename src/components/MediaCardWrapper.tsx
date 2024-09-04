import { useNavigate } from "react-router-dom";
import MediaCard from "./MediaCard.js";
import { useAppDispatch } from "../hooks/use-app-dispatch.hook.js";
import { actions as cocktailDetailsActions } from "../store/cocktail-details/coctail-details.js";

import { Cocktail } from "../types/cocktail.type.ts";

type Props = {
  cocktail: Cocktail;
};

export default function MediaCardWrapper({ cocktail }: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onCardClick = () => {
    dispatch(cocktailDetailsActions.loadCocktailDetails(cocktail.idDrink));
    navigate(`/cocktail/${cocktail.idDrink}`);
  };
  return <MediaCard onClick={onCardClick} cocktail={cocktail} />;
}
