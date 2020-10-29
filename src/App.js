import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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

function App() {
  const classes = useStyles;
  return (
    <Router>
      <Header />
      <hr />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <MenuNav />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Main />
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </Router>
  );
}

export default App;
