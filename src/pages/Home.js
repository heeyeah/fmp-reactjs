import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import "../styles/page.scss";

function Home() {
  return (
    <div className="home">
      <InsertEmoticonIcon className="emoji"/>
      <CloudQueueIcon className="emoji"/>
      <br />
      WELCOME TO <br />
      ✨What error is this?✨
      <div>
        <Link to="/about">
        <Button className="button">사용법</Button>
        </Link>
        <Link to="/chatBot">
        <Button className="button">시작</Button>
        </Link>
        
        
      </div>
    </div>
  );
}

export default Home;
