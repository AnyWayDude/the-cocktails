import { useNavigate } from 'react-router-dom'
import MediaCard from './MediaCard'
import { useAppDispatch } from '../hooks/use-app-dispatch.hook'
import { loadCocktailDetails } from '../store/cocktail-details/actions'
import { CocktailDetails } from '../types/cocktail-details.type'

type Props = {
    cocktail: CocktailDetails
}

export default function MediaCardWrapper({ cocktail }: Props) {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const onCardClick = () => {
        dispatch(loadCocktailDetails.setCurrentId(cocktail.idDrink));
        navigate(`/cocktail/${cocktail.idDrink}`)
    }
  return <MediaCard onClick={onCardClick} cocktail={cocktail} />
}
