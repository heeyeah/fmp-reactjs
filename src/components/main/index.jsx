import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../Home";
import About from "../About";
import ChatBot from "../ChatBot";
import History from "../History";
import Answer from "../Answer";

const Container = styled.div`
  height: 500px;
  background-color: yellow;
`;

export const Main = () => {
  return (
    <Container>
      Main
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/chatBot" component={ChatBot} />
        <Route path="/history" component={History} />
        <Route path="/answer" component={Answer} />
      </main>
    </Container>
  );
};
