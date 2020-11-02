import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/footer";
import { Login } from "./components/login";
import { Main } from "./components/main";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/home" component={Main}></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
