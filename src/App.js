import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { MenuNav } from "./components/menu";
import { Main } from "./components/main";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function MainGrid(props) {
  const isHome = props.isHome;
  console.log("MainGrid 상태", isHome);
  
  if (isHome) {
    return null;
  }

  return (
      <Header />
  );
}

function App() {
  const [home, isHome] = useState(false);

  return (
    <Router>
      <Grid container spacing={1}>
        <Grid item xs={3} sm={3} md={3} lg={2}>
          <MenuNav isHome={(fromMenu) => isHome(fromMenu)} />
        </Grid>

        <Grid item xs={9} sm={9} md={9} lg={10}>
          <MainGrid isHome={home} />
          <Main />
        </Grid>
      </Grid>
      <Footer />
    </Router>
  );
}

export default App;
