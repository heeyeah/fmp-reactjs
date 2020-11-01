import React from "react";
import "./index.scss";

export const Header = (props) => {
  
  let chooseStyle;

  if(props.isTitle) {
    chooseStyle = "title-header";
  } else {
    if(props.hidden) {
      chooseStyle = "hidden";
    } else {
      chooseStyle = "home-header";
    }
  }
  
  return (
    <h1 className={chooseStyle}>
      {props.header}
    </h1>
  );
};
