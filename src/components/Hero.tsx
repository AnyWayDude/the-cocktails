import { Box, Typography } from "@mui/material";
import backgroundImage from "../images/Background.jpg";
import { useEffect, useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function Hero() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(1 - scrollPosition / 200, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleArrowClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: "120vh",
          backgroundSize: "cover",
          filter: "blur(3px)",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: opacity,
          transition: "opacity 0.3s",
          whiteSpace: "nowrap",
          fontFamily: "Roboto Mono",
          fontSize: {
            xs: "1rem",
            sm: "2rem",
            md: "3rem",
            lg: "4rem",
          },
        }}
        className="neonText"
      >
        Dive into the world of drinks
      </Typography>
      <KeyboardDoubleArrowDownIcon
        onClick={handleArrowClick}
        className="arrow bounce"
        fontSize="large"
        sx={{
          transform: "translate(-50%, -50%)",
          opacity: opacity,
          transition: "opacity 0.3s",
        }}
      />
      <Typography className="neonText" sx={{m: 5, fontFamily: "Roboto Mono", fontSize: "2rem", textAlign: "center" }}>
        The choice is yours
      </Typography>
    </Box>
  );
}

export default Hero;
