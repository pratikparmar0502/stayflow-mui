import React, { useContext } from "react";
import { Typography, Button, Container, Stack } from "@mui/material";
import { MoodContext } from "../../context/MoodContext.jsx";

const Home = () => {
  const { setMood } = useContext(MoodContext);

  return (
    <>
      <Container sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h2" fontWeight="bold" color="primary" gutterBottom>
          StayFlow Initialized! 🚀
        </Typography>
        <Typography variant="h6" color="textSecondary" mb={4}>
          Testing Mood System:
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" onClick={() => setMood("nature")}>
            🌿 Nature
          </Button>
          <Button variant="contained" onClick={() => setMood("urban")}>
            ⚡ Urban
          </Button>
          <Button variant="contained" onClick={() => setMood("ocean")}>
            🌊 Ocean
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
