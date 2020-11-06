import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Container, IconButton, Modal } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
  const [loginId, setLoginId] = useState("heeye");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Container className="join">
        <IconButton color="secondary" onClick={handleClickOpen}>
          <PersonAddIcon />
        </IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Initial Registration✨
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              To use this website, please enter your information here.
            </DialogContentText>
            <TextField
              // autoFocus
              margin="dense"
              id="id"
              label="Shinhan ID"
              placeholder="행번"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="name"
              placeholder="이름"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="department"
              label="department"
              placeholder="부서"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="team"
              label="team (optional)"
              placeholder="팀"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Join
            </Button>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        Have you never used it? Click this to register your information.
      </Container>
    </Container>
  );
};
