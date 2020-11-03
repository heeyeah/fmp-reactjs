import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/footer";
import { Login } from "./components/login";
import { Main } from "./components/main";

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
          render={(props) => <Main {...props} loginId={loginId} />}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
