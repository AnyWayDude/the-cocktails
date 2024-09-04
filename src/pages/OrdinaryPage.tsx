import { Box } from "@mui/material";
import Cards from "../components/Cards";
import FullscreenImage from "../components/Hero.js";
import { useAppSelector, useAppDispatch } from "../hooks/hooks.js";
import { useEffect } from "react";
import { actions as cocktailsActions } from "../store/cocktails/cocktails.js";
import { DataStatus } from "../enums/enums.js";
import { Typography } from "@mui/material";
import Loader from "../components/UI/Loader.js";

function OrdinaryPage() {
  const dispatch = useAppDispatch();
  const { data, dataStatus } = useAppSelector(({ cocktails }) => ({
    data: cocktails.collection,
    dataStatus: cocktails.dataStatus,
  }));

  useEffect(() => {
    void dispatch(cocktailsActions.loadAll());
  }, []);

  return (
    <Box>
      <FullscreenImage />
      {dataStatus === DataStatus.PENDING ? (
        <Loader />
      ) : dataStatus === DataStatus.REJECTED ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Typography variant="h6" color="error">
            Oops, something went wrong. Try again later.
          </Typography>
        </Box>
      ) : dataStatus === DataStatus.FULFILLED ? (
        <Cards allDrinksData={data} />
      ) : null}
    </Box>
  );
}

export default OrdinaryPage;
