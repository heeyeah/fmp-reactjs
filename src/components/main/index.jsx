import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../../pages/Home";
import About from "../../pages/About";
import ChatBot from "../../pages/ChatBot";
import History from "../../pages/History";
import Answer from "../../pages/Answer";


export const Main = () => {
  return (
    <div style={{
        backgroundColor: `$theme-home-background`,
    }}>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/chatBot" component={ChatBot} />
        <Route path="/history" component={History} />
        <Route path="/answer" component={Answer} />
      </main>
      </div>
  );
};
