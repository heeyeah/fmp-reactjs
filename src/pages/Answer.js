import React from "react";
import { Header } from "../components/header";
import { Container } from "@material-ui/core";
function Answer() {
  return (
    <>
      <Header header="답변등록"></Header>
      <Container>
        여기에는 최소한 게시판같은 기능은 있어야 한다.
        <br />
        챗봇이 답변을 제대로 못했을 때, 누군가 답변을 등록해줘야하니까 답변 등록
        못한 글들을 리스트업해놓고 답변만을 기다리는 화면이지. 이 화면을 많이
        사용할 유저는 DBA이나 개발플랫폼 유닛이다.
      </Container>
    </>
  );
}

export default Answer;
