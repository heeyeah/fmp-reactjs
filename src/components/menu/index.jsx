import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import styled from 'styled-components';
// import "./index.scss";

const Container = styled.div`
  height: 500px;
  background-color: lightgreen;
`;

export const MenuNav = () => {
  return (
    <Container>
      Menu!
      <ul>
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button>about</button>
            </Link>
          </li>
          <li>
            <Link to="/chatBot">
              <button>chatBot</button>
            </Link>
          </li>
          <li>
            <Link to="/history">
              <button>history</button>
            </Link>
          </li>
          <li>
            <Link to="/answer">
              <button>answer</button>
            </Link>
          </li>
        </ul>
    </Container>
  );
};
