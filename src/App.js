import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/client/Home";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
