import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Home from "../../pages/Home";
import About from "../../pages/About";
import ChatBot from "../../pages/ChatBot";
import History from "../../pages/History";
import Answer from "../../pages/Answer";
import Grid from "@material-ui/core/Grid";
import { MenuNav } from "../menu";
import { Footer } from "../footer";

export const Main = () => {
  return (
    <Router>
      <Grid container spacing={0}>
        <Grid item xs={4} sm={3} md={3} lg={2}>
          <MenuNav />
        </Grid>

        <Grid item xs={8} sm={9} md={9} lg={10}>
          <div>
            <main>
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/chatBot" component={ChatBot} />
              <Route path="/history" component={History} />
              <Route path="/answer" component={Answer} />
            </main>
          </div>
        </Grid>
      </Grid>
    </Router>
  );
};
