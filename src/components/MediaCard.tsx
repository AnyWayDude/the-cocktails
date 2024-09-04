import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Cocktail } from "../types/cocktail.type.js";
import { CardActionArea } from "@mui/material";
import NoImage from '../images/NoImage.jpg'

type Props = {
  cocktail: Cocktail;
  onClick: () => void;
};
function MediaCard({ cocktail, onClick }: Props) {
  return (
    <Card
      sx={{
        width: 300,
        height: 400,
        m: 1,
        backgroundColor: "#2a2a2a85",
        border: "1px solid rgba(0, 0, 0, 0.169)",
        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)",
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardMedia
          sx={{ height: 300 }}
          image={cocktail.strDrinkThumb || NoImage}
          title={cocktail.strDrink}
        />
        <CardContent>
          <Typography
            align="center"
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "white",
              fontStyle: "italic",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {cocktail.strDrink}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard;
