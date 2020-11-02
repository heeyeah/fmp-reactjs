import React from "react";
import { Link, Route, useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Main } from "../main";

import "./index.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className="login">
      <Container>LOGIN😁</Container>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Container>
            <TextField
              required
              id="standard-required"
              label="Shinhan ID"
              defaultValue="Hello World"
            />
          </Container>
          <Container>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Container>
        </div>
      </form>
      <Container className="button">
        <Button color="secondary" component={Link} to={"/home"}>
          LOGIN
        </Button>
        <Route path="/home" component={Main} />
      </Container>
    </Container>
  );
};
