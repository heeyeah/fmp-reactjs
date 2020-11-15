import React from "react";
import { Header } from "../components/header";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { MenuNav } from "../components/menu";
function ChatBot(props) {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={4} sm={3} md={3} lg={2}>
          <MenuNav loginId={props.loginId} />
        </Grid>

        <Grid item xs={8} sm={9} md={9} lg={10}>
          <Header header="챗봇" />
          <Container>
            챗봇챗봇챗봇챗봇챗봇챗봇챗봇챗봇챗봇챗봇챗봇챗봇챗봇
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default ChatBot;
