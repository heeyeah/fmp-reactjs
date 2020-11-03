import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const Login = (props) => {
  // let history = useHistory();
  const classes = useStyles();
  const [loginId, setLoginId] = useState("Hello World");

  const handleChange = (e) => {
    setLoginId(() => e.target.value);
  };

  const handleClick = () => {
    props.callbackLoginId(loginId);
  };

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
              value={loginId}
              onChange={handleChange}
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
        <Button
          color="secondary"
          component={Link}
          to={"/home"}
          onClick={handleClick}
        >
          LOGIN
        </Button>
      </Container>
    </Container>
  );
};
