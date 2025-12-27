import React, { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [mood, setMood] = useState("default");

  // Define colors based on mood
  const getTheme = () => {
    let color = "#1976d2"; // Default Blue
    if (mood === "nature") color = "#2e7d32";
    if (mood === "urban") color = "#6200ea";
    if (mood === "ocean") color = "#00bcd4";

    return createTheme({
      palette: { primary: { main: color } },
      typography: { fontFamily: "Poppins, sans-serif" },
    });
  };

  return (
    <>
      <MoodContext.Provider value={{ mood, setMood }}>
        <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>
      </MoodContext.Provider>
    </>
  );
};

export default MoodProvider;
