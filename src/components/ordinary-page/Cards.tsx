import { Box, Pagination, Stack } from "@mui/material";
import { Cocktail } from "../../types/cocktail.type.ts";
import MediaCardWrapper from "../ordinary-page/MediaCardWrapper.tsx";
import { useState } from "react";

type Props = {
  allDrinksData: Cocktail[] | undefined;
};

const ITEMS_PER_PAGE = 10;

function Cards({ allDrinksData }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  if (!allDrinksData) return null;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = allDrinksData.slice(startIndex, endIndex);

  const handlePageChange = (
    //<Pagination/> requires it because of type requirements,
    _: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const totalPages = Math.ceil(allDrinksData.length / ITEMS_PER_PAGE);

  return (
    <Box>
      <Stack
        direction="row"
        useFlexGap
        sx={{ m: 2, justifyContent: "center", flexWrap: "wrap" }}
      >
        {paginatedData?.map((cocktail) => (
          <MediaCardWrapper key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 3,
          backgroundColor: "#656565",
          borderRadius: "10px",
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
        />
      </Box>
    </Box>
  );
}

export default Cards;
