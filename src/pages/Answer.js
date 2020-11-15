import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Header } from "../components/header";
import { Container, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { MenuNav } from "../components/menu";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
// const columns = [
//   { field: "id", headerName: "No", width: "10%" },
//   { field: "type", headerName: "분류", width: "15%" },
//   { field: "title", headerName: "제목", width: "60%" },
//   {
//     field: "isAnswered",
//     headerName: "답변여부",
//     description: "답변여부를나타냄!",
//     width: "10%",
//   },
// ];

// const rows = [
//   { id: 1, type: "Oracle", title: "ORA-1331 관련", isAnswered: "X" },
//   { id: 2, type: "Oracle", title: "ORA-05530인데..", isAnswered: "X" },
//   { id: 3, type: "ProFrame", title: "??", isAnswered: "X" },
//   { id: 4, type: "ProFrame", title: "이게몬가요", isAnswered: "X" },
//   { id: 5, type: "ProFrame", title: "이게몬가요", isAnswered: "X" },
// ];

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "type", headerName: "분류", width: 100 },
  { field: "title", headerName: "제목", width: 300 },
  {
    field: "isAnswered",
    headerName: "답변",
    width: 60,
  },
  { field: "date", headerName: "등록일자", width: 120 },
];

const rows = [
  {
    id: 1,
    title: "ORA-1311몬데",
    type: "Oracle",
    isAnswered: "X",
    date: "2020-11-13",
  },
  {
    id: 2,
    title: "질문있습니다",
    type: "ProFrame",
    isAnswered: "X",
    date: "2020-11-14",
  },
  {
    id: 3,
    title: "Hello, world!",
    type: "ProFrame",
    isAnswered: "O",
    date: "2020-11-16",
  },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Answer(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("All");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={4} sm={3} md={3} lg={2}>
          <MenuNav loginId={props.loginId} />
        </Grid>

        <Grid item xs={8} sm={9} md={9} lg={10}>
          <Header header="답변등록"></Header>
          <Container className="answer">
            <div>
              <br />
              <br />
              챗봇에게 답을 얻지 못하셨으면, 질문을 등록해주세요?
              <br />
              바로바로 답변을 드리도록 하겠습니다!🤓
              <br />
              질문과 답변은 에러봇이 알아서 학습을 시작합니다.
              <br />더 좋은 모습의 에러봇을 기대해주세요👻
              <br />
              {/* 답변이 달린 시점에 에러봇이 학습을 끝내고, 일주일 후 질문/답변
              데이터를 삭제합니다. */}
            </div>
            <div style={{ paddingTop: `3em` }}>
              <FormControl className={classes.formControl}>
                <InputLabel shrink id="demo-simple-select-helper-label">
                  분류
                </InputLabel>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={age}
                  onChange={handleChange}
                  // displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value="All">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value={"Oracle"}>Oracle</MenuItem>
                  <MenuItem value={"ProFrame"}>ProFrame</MenuItem>
                </Select>
                <FormHelperText>Error Type</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel shrink id="demo-simple-select-helper-label">
                  작성자
                </InputLabel>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={age}
                  onChange={handleChange}
                  // displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value="All">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value={"mine"}>Mine</MenuItem>
                  <MenuItem value={"others"}>Others</MenuItem>
                </Select>
                <FormHelperText>questioner</FormHelperText>
              </FormControl>
            </div>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid rows={rows} columns={columns} pageSize={5} />
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
