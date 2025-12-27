import React, { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [mood, setMood] = useState("default");

  // Define colors and settings based on mood
  const getTheme = () => {
    let color = "#1976d2"; // Default Blue
    let type = "light"; // Default Light Mode

    if (mood === "nature") color = "#2e7d32"; // Forest Green
    if (mood === "urban") color = "#6200ea"; // Deep Purple
    if (mood === "ocean") color = "#00bcd4"; // Ocean Cyan

    // NEW THEMES ADDED HERE
    if (mood === "romantic") color = "#d81b60"; // Rose/Pink
    if (mood === "royal") color = "#ffab00"; // Luxury Gold
    if (mood === "midnight") {
      color = "#90caf9"; // Light Blue for contrast in dark mode
      type = "dark"; // Full Dark Mode Trigger
    }

    return createTheme({
      palette: {
        primary: { main: color },
        mode: type, // Isse Midnight click karne pe background dark ho jayega
      },
      typography: {
        fontFamily: "Poppins, sans-serif",
      },
    });
  };

  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>
    </MoodContext.Provider>
  );
};

export default MoodProvider;
