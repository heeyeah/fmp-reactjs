import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./components/footer";
import { MenuNav } from "./components/menu";
import { Main } from "./components/main";
import Grid from "@material-ui/core/Grid";

import "./App.css";

function App() {
  return (
    <Router>
      <Grid container spacing={0}>
        <Grid item xs={4} sm={3} md={3} lg={2}>
          <MenuNav />
        </Grid>

        <Grid item xs={8} sm={9} md={9} lg={10}>
          <Main />
        </Grid>
      </Grid>
      <Footer />
    </Router>
  );
}

export default App;
