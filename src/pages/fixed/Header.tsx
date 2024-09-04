import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import HeaderModal from "../../components/UI/HeaderModal";

function Header() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          zIndex: 10,
        }}
      >
        <Toolbar
          sx={{
            width: {
              sm: "500px",
              md: "600px",
              lg: "800px",
              xl: "1000px",
            },
          }}
        >
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                fontFamily: "Bungee Tint, cursive",
                fontStyle: "italic",
              },
            }}
          >
            Ordinary Drinks
          </Typography>
          <HeaderModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
