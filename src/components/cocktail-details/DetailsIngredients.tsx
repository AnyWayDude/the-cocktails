import { Box, Chip, Stack, Typography } from "@mui/material";
import { CocktailDetails } from "../../types/cocktail-details.type";

type Props = {
  details: CocktailDetails | undefined;
};

const DetailsIngredients = ({ details }: Props) => {
  if (!details) {
    return null;
  }

  const ingredients = Object.entries(details)
    .filter(
      ([key]) =>
        key.startsWith("strIngredient") && details[key as keyof CocktailDetails]
    )
    .map(([, value]) => value);

  const measures = Object.entries(details)
    .filter(
      ([key]) =>
        key.startsWith("strMeasure") && details[key as keyof CocktailDetails]
    )
    .map(([, value]) => value);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Ingredients:
      </Typography>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {ingredients.map(
          (ingredient, index) =>
            ingredient && (
              <Chip
                className="ingredient-chip"
                key={ingredient}
                label={`${ingredient}${
                  measures[index] ? ` - ${measures[index]}` : ""
                }`}
                sx={{ color: "#fff", backgroundColor: "#2f2f2f", mt: "5px" }}
              />
            )
        )}
      </Stack>
    </Box>
  );
};

export default DetailsIngredients;
