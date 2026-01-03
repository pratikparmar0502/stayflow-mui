import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/client/Home";
import Layout from "./components/layout/Layout";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 },
    h2: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 },
    h3: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 },
    h4: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 },
    h5: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 },
    h6: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 },
    button: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Switch>
          <Route exact path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
        </Switch>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </ThemeProvider>
  );
}

export default App;
