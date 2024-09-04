import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dialog } from "@mui/material";

import RoomIcon from "@mui/icons-material/Room";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import ModalMap from "./ModalMap";

export default function HeaderModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{
          color: "orange",
          borderColor: "orange",
          fontFamily: "Bungee Tint, cursive",
          fontStyle: "italic",
        }}
        startIcon={<LocalBarIcon />}
        endIcon={<RoomIcon />}
      >
        Bars
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box className="modal-window">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{color: "white", fontStyle: "italic" }}
          >
           Good places to visit
          </Typography>
          <ModalMap />
        </Box>
      </Dialog>
    </div>
  );
}
