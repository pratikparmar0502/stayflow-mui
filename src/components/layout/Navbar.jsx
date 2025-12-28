import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Box,
  Container,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import {
  TravelExplore,
  Forest,
  LocationCity,
  Water,
  Favorite,
  AutoAwesome,
  NightsStay,
} from "@mui/icons-material";
import { MoodContext } from "../../context/MoodContext";

const Navbar = () => {
  const { mood, setMood } = useContext(MoodContext);
  const [scrolled, setScrolled] = useState(false);

  const getLogoIcon = () => {
    switch (mood) {
      case "nature":
        return <Forest sx={{ mr: 1, fontSize: "1.8rem" }} />;
      case "urban":
        return <LocationCity sx={{ mr: 1, fontSize: "1.8rem" }} />;
      case "ocean":
        return <Water sx={{ mr: 1, fontSize: "1.8rem" }} />;
      case "romantic":
        return <Favorite sx={{ mr: 1, fontSize: "1.8rem" }} />;
      case "royal":
        return <AutoAwesome sx={{ mr: 1, fontSize: "1.8rem" }} />;
      case "midnight":
        return <NightsStay sx={{ mr: 1, fontSize: "1.8rem" }} />;
      default:
        return <TravelExplore sx={{ mr: 1, fontSize: "1.8rem" }} />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moods = [
    { id: "default", icon: "🏠", label: "Default" },
    { id: "nature", icon: "🌿", label: "Nature" },
    { id: "urban", icon: "⚡", label: "Urban" },
    { id: "ocean", icon: "🌊", label: "Ocean" },
    { id: "romantic", icon: "❤️", label: "Romantic" },
    { id: "royal", icon: "👑", label: "Royal" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? 1 : 0,
        transition: "0.3s all ease-in-out",
        color: scrolled ? "primary.main" : "white",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            onClick={() => setMood("default")}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              transition: "0.5s all ease", // Smooth transition for logo change
              color: scrolled ? "primary.main" : "white",
            }}
          >
            <motion.div
              key={mood} // Key change hote hi animation chalega
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {getLogoIcon()}
            </motion.div>
            StayFlow
          </Typography>

          <Stack direction="row" spacing={1}>
            {moods.map((m) => (
              <Button
                key={m.id}
                onClick={() =>
                  mood === m.id ? setMood("default") : setMood(m.id)
                }
                sx={{
                  minWidth: "40px",
                  borderRadius: "20px",
                  backgroundColor:
                    mood === m.id ? "primary.main" : "transparent",
                  color:
                    mood === m.id
                      ? "white"
                      : scrolled
                      ? "text.primary"
                      : "white",
                  "&:hover": {
                    backgroundColor: "primary.light",
                    color: "white",
                  },
                }}
              >
                {m.icon}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            {/* Dark Mode Toggle */}
            <Button
              onClick={() =>
                setMood(mood === "midnight" ? "default" : "midnight")
              }
              sx={{
                color: scrolled ? "text.primary" : "white",
                minWidth: "40px",
              }}
            >
              {mood === "midnight" ? <LightMode /> : <DarkMode />}
            </Button>

            <Button
              variant="contained"
              sx={{ borderRadius: "20px", px: 3, textTransform: "none" }}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              sx={{ borderRadius: "20px", px: 3, textTransform: "none" }}
            >
              Booking
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
