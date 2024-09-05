import { Alert, Box } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { ErrorMessage } from "../../enums/error-messages";

type ErrorProps = {
  message?: ErrorMessage;
};

export default function Error({ message = ErrorMessage.Default }: ErrorProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Alert
        icon={<ErrorOutlineIcon fontSize="inherit" />}
        severity="error"
        sx={{ color: "#7c6800", backgroundColor: "#4c4c4c1a" }}
      >
        {message}
      </Alert>
    </Box>
  );
}
