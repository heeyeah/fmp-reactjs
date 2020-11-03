import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import { Header } from "../components/header";
import "../styles/page.scss";

function Home(props) {
  console.log('here?', props.loginId)
  return (
    <>
      <Header hidden></Header>
      <div className="home">
        <InsertEmoticonIcon className="emoji" />
        <CloudQueueIcon className="emoji" />
        <br />
        WELCOME TO <br />
        ✨What error is this?✨
        <div>
          <Button className="button" component={Link} to={"/about"}>
            사용법
          </Button>

          <Button className="button" component={Link} to={"/chatBot"}>
            시작
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
