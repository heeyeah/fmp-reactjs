import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import { Header } from "../components/header";
import Grid from "@material-ui/core/Grid";
import { MenuNav } from "../components/menu";
import "../styles/page.scss";

function Home(props) {
  console.log("here?", props.loginId);
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={4} sm={3} md={3} lg={2}>
          <MenuNav loginId={props.loginId} />
        </Grid>

        <Grid item xs={8} sm={9} md={9} lg={10}>
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
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
