import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Header } from "../components/header";
import { Container } from "@material-ui/core";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Answer() {
  return (
    <>
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
          
          <br />답변이 달린 시점부터 일주일 후,
          에러봇이 학습을 끝내고 질문/답변 데이터를 삭제합니다.
          
        </div>

        <div style={{ paddingTop: `5em`, height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            
          />
        </div>
      </Container>
    </>
  );
}
