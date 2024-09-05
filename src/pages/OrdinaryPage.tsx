import { Box } from "@mui/material";
import Cards from "../components/ordinary/Cards.js";
import Hero from "../components/ordinary/Hero.js";
import { useAppSelector, useAppDispatch } from "../hooks/hooks.js";
import { useEffect } from "react";
import { actions as cocktailsActions } from "../store/cocktails/cocktails.js";
import { DataStatus } from "../enums/enums.js";
import Loader from "../components/common/Loader.js";

import Error from "../components/common/Error.js";
import { ErrorMessage } from "../enums/error-messages.js";

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
      <Hero />
      {dataStatus === DataStatus.PENDING ? (
        <Loader />
      ) : dataStatus === DataStatus.REJECTED ? (
        <Error message={ErrorMessage.Default} />
      ) : dataStatus === DataStatus.FULFILLED ? (
        <Cards allDrinksData={data} />
      ) : null}
    </Box>
  );
}

export default OrdinaryPage;
