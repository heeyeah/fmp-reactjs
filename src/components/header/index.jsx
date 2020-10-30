import React from "react";
import "./index.scss";

export const Header = (props) => (
  <h1 className="home-header">
      {props.header}
  </h1>
);