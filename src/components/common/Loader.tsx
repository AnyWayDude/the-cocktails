import { Box } from "@mui/material";

export default function Loader() {
  return (
    <Box>
      <div className="loader">
        <div className="loading-color color-1"></div>
        <div className="loading-color color-2"></div>
        <div className="loading-color color-3"></div>
        <div className="loading-color color-4"></div>
      </div>
    </Box>
  );
}
