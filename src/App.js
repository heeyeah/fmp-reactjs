import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/footer";
import { Login } from "./components/login";
import About from "./pages/About";
import ChatBot from "./pages/ChatBot";
import History from "./pages/History";
import Answer from "./pages/Answer";
import Home from "./pages/Home";
import "./App.scss";

function App() {
  const [loginId, setLoginId] = useState(null);

  const callbackLoginId = (id) => {
    console.log("root login id=", id);
    setLoginId(id);
  };

  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Login}></Route> */}
        <Route
          exact
          path="/"
          render={(props) => (
            <Login {...props} callbackLoginId={callbackLoginId} />
          )}
        />
        <Route
          path="/home"
          render={(props) => <Home {...props} loginId={loginId} />}
        />
        <Route path="/about" render={(props) => <About {...props} loginId={loginId} />} />
        <Route path="/chatBot" render={(props) => <ChatBot {...props} loginId={loginId} />} />
        <Route path="/history" render={(props) => <History {...props} loginId={loginId} />} />
        <Route path="/answer" render={(props) => <Answer {...props} loginId={loginId} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
