import React from "react";
import { Typography } from "@material-ui/core";
import "./test.css";
import Demo from "./gradient";

function TTTTT() {
  return (
    <div className="main">
      <Demo />
      Main Dynamite!
      <Typography component="h1" variant="h4">
        Title
      </Typography>
      <Typography color="primary" variant="h1">
        {" "}
        hello, heading 1
      </Typography>
    </div>
  );
}

export default TTTTT;
