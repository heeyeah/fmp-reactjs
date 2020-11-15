import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import ChatBot from "../../pages/ChatBot";
import History from "../../pages/History";
import Answer from "../../pages/Answer";

export const Main = (props) => {

  return (
    <Router>
      {/* <Grid container spacing={0}>
        <Grid item xs={4} sm={3} md={3} lg={2}>
          <MenuNav loginId={props.loginId}/>
        </Grid>

        <Grid item xs={8} sm={9} md={9} lg={10}> */}
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/chatBot" component={ChatBot} />
            <Route path="/history" component={History} />
            <Route path="/answer" component={Answer} />
          </Switch>
        {/* </Grid>
      </Grid> */}
    </Router>
  );
};
