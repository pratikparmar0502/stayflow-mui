import React, { useContext, useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Box,
  Container,
} from "@mui/material";
import { MoodContext } from "../../context/MoodContext";

const Navbar = () => {
  const { mood, setMood } = useContext(MoodContext);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect ke liye logic
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
    { id: "midnight", icon: "🌙", label: "Midnight" },
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
            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
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

          <Box>
            <Button color="inherit">Login</Button>
            <Button variant="contained" sx={{ ml: 2, borderRadius: "20px" }}>
              Book Now
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
