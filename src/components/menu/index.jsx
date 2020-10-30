import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import "./index.scss";

const Container = styled.div`
  height: 100%;
  background-color: lightgreen;
`;

export const MenuNav = (props) => {
  console.log("props", props);

  const [text, setText] = useState("");

  return (
    <Container>
      Current Menu={text}
      <ul>
        <li>
          <Link to="/">
            <button
              onClick={() => {
                setText("HOME!!!")
                props.isHome(true)
              }}
            >
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button
              onClick={() => {
                setText("ABOUT!!!")
                props.isHome(false);
              }}
            >
              about
            </button>
          </Link>
        </li>
        <li>
          <Link to="/chatBot">
          <button
              onClick={() => {
                setText("CHATBOT!!!")
                props.isHome(false);
              }}
            >chatBot</button>
          </Link>
        </li>
        <li>
          <Link to="/history">
          <button
              onClick={() => {
                setText("HISTORY!!!")
                props.isHome(false);
              }}
            >history</button>
          </Link>
        </li>
        <li>
          <Link to="/answer">
          <button
              onClick={() => {
                setText("ANSWER!!!")
                props.isHome(false);
              }}
            >answer</button>
          </Link>
        </li>
      </ul>
    </Container>
  );
};
