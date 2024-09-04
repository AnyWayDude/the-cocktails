import { Box, Chip, Typography } from "@mui/material";

import { CocktailDetails } from "../types/cocktail-details.type";
import DetailsIngredients from "./DetailsIngredients.js";
import Error from "./common/Error.js";
import { ErrorMessage } from "../enums/error-messages";
import DetailsTags from "./DetailsTags.js";
import LiquorIcon from "@mui/icons-material/Liquor";

type Props = {
  details: CocktailDetails | undefined;
};

export default function DetailsBox({ details }: Props) {
  if (!details) {
    return <Error message={ErrorMessage.NotFound} />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "Center",
        alignItems: "Center",
        mt: 10,
      }}
    >
      <Box sx={{ mr: 2 }}>
        <Typography variant="h4" gutterBottom>
          {details.strDrink}
        </Typography>
        <Box
          component="img"
          src={details.strDrinkThumb}
          alt={details.strDrink}
          sx={{ width: "100%", maxWidth: 400, mb: 3, borderRadius: 2 }}
        />
      </Box>

      <Box sx={{ width: "50%" }}>
        <Typography variant="h6" gutterBottom>
          Category: {details.strCategory}
        </Typography>

        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" gutterBottom sx={{ mr: 1 }}>
            Alcoholic:
          </Typography>
          <Chip
            label={
              details.strAlcoholic === "NonAlcoholic"
                ? "Non-Alcoholic"
                : details.strAlcoholic || "Unknown"
            }
            icon={<LiquorIcon />}
            color={
              details.strAlcoholic === "NonAlcoholic" ? "success" : "warning"
            }
          />
        </Box>

        <Typography variant="h6" gutterBottom>
          Glass: {details.strGlass}
        </Typography>

        <Typography variant="body1" gutterBottom>
          Instructions: {details.strInstructions || "Just mix it up"}
        </Typography>

        <DetailsTags tags={details.strTags} />

        <DetailsIngredients details={details} />
      </Box>
    </Box>
  );
}
