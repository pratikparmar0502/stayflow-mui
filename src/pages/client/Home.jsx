import React, { useContext } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search, LocationOn, CalendarMonth } from "@mui/icons-material";
import { MoodContext } from "../../context/MoodContext.jsx";

const Home = () => {
  const { mood } = useContext(MoodContext);

  // Mood ke hisaab se background images ka object
  const moodImages = {
    nature:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    urban:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80",
    ocean:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    romantic:
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=1600&q=80",
    royal:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
    midnight:
      "https://images.unsplash.com/photo-1470252649358-96f3c80242c9?auto=format&fit=crop&w=1600&q=80",
    default:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
  };

  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          height: "90vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${
            moodImages[mood] || moodImages.default
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-image 0.8s ease-in-out", // Smooth image transition
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center", color: "white" }}>
          <Typography
            variant="h2"
            fontWeight="800"
            gutterBottom
            sx={{ textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}
          >
            Find Your Perfect{" "}
            {mood === "default"
              ? "Dream"
              : mood.charAt(0).toUpperCase() + mood.slice(1)}{" "}
            Stay
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9 }}>
            Book unique hotels and vibrant spaces around the world.
          </Typography>

          {/* FLOATING SEARCH BAR */}
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "50px",
              p: 1,
              display: "flex",
              alignItems: "center",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              flexWrap: { xs: "wrap", md: "nowrap" },
              gap: 1,
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              placeholder="Where are you going?"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn color="primary" sx={{ ml: 2 }} />
                  </InputAdornment>
                ),
              }}
              sx={{ px: 2 }}
            />
            <TextField
              fullWidth
              variant="standard"
              placeholder="Dates"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonth color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{ px: 2, borderLeft: { md: "1px solid #ddd" } }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: "40px",
                px: 5,
                py: 1.5,
                fontSize: "1.1rem",
                textTransform: "none",
                minWidth: "150px",
              }}
            >
              Search
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Content for Scrolling Test */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center">
          Experience the {mood} vibe like never before.
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
