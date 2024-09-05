import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks.js";
import { useEffect } from "react";
import { loadCocktailDetails } from "../store/cocktail-details/actions.js";

import DetailsBox from "../components/cocktail-details/DetailsBox.js";
import { DataStatus } from "../enums/data-status.enum.js";
import Loader from "../components/common/Loader.js";

import { ErrorMessage } from "../enums/error-messages.js";
import Error from "../components/common/Error.js";
import { Box } from "@mui/material";

function CocktailDetailsPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, dataStatus } = useAppSelector(({ cocktailDetails }) => ({
    data: cocktailDetails.details,
    dataStatus: cocktailDetails.dataStatus,
  }));
  console.log("Data Component", data);

  useEffect(() => {
    if (id) {
      dispatch(loadCocktailDetails(id));
    }
  }, [id, dispatch]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {dataStatus === DataStatus.PENDING ? (
        <Loader />
      ) : dataStatus === DataStatus.REJECTED ? (
        <Error message={ErrorMessage.Default} />
      ) : dataStatus === DataStatus.FULFILLED ? (
        <DetailsBox details={data} />
      ) : null}
    </Box>
  );
}

export default CocktailDetailsPage;
