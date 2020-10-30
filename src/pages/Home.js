import React from "react";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../styles/page.scss";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
const HomeButton = styled(Button)({
  margin: "20px",
  // background: 'linear-gradient(45deg, #92c5ff 20%, #162472 90%)',
  background: "#162472",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(131, 144, 166, .3)",
  color: "white",
  height: 40,
  padding: "0 30px",
  fontSize: "17px",
  fontFamily: "d2coding", //todo 통일해야함.
});

function Home() {
  return (
    <div className="home">
      <InsertEmoticonIcon className="emoji"/>
      <CloudQueueIcon className="emoji"/>
      <br />
      WELCOME TO <br />
      ✨What error is this?✨
      <div>
        <HomeButton>사용법</HomeButton>
        <HomeButton>시 작</HomeButton>
      </div>
    </div>
  );
}

export default Home;
