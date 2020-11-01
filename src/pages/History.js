import React from "react";
import { Header } from "../components/header";
import { Container } from "@material-ui/core";
function History() {
  return (
    <>
      <Header header="히스토리"></Header>
      <Container>
        이 페이지는 카드형식으로 구성될 예정이며, 히스토리가 있으려면 유저가
        누군지 알아야하고, 그러면 로그인도 ㅏㅁㄴ들어야하네.........
      </Container>
    </>
  );
}

export default History;
