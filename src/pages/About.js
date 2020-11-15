import React from "react";
import { Header } from "../components/header";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { MenuNav } from "../components/menu";
import "../styles/page.scss";

function About(props) {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={4} sm={3} md={3} lg={2}>
          <MenuNav loginId={props.loginId} />
        </Grid>

        <Grid item xs={8} sm={9} md={9} lg={10}>
          <Header header="사용법" />
          <div className="about">
            <Typography variant="h4" gutterBottom>
              Guide📗
            </Typography>
            <Typography variant="h5" gutterBottom>
              @챗봇
            </Typography>
            <Typography variant="body1" gutterBottom>
              Oracle과 ProFrame의 에러코드에 대해 답변을 해드립니다.<br/>
              챗봇에게서 원하는 답변이 나오지 않았다면 '질문/답변 등록' 메뉴에서 질문을 등록해주세요!<br/>
              챗봇이 더 똑똑해지는데 도움이 됩니다.🤩<br/><br/>
            </Typography>
            <Typography variant="h5" gutterBottom>
              @히스토리
            </Typography>
            <Typography variant="body1" gutterBottom>
              챗봇과의 대화 히스토리를 카드형식으로 볼 수 있습니다.
              <br/><br/>
            </Typography>
            <Typography variant="h5" gutterBottom>
              @질문/답변등록
            </Typography>

            <Typography variant="body1" gutterBottom>
              챗봇에게서 만족스러운 답변이 나오지 않을 때에, 질문/답변 메뉴를 사용해주세요! <br/>
              
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default About;
