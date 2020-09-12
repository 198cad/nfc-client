import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import socket from "./socket";
import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 10000,
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function App() {
  const classes = useStyles();
  const [uid, setUid] = useState("");
  const [eid, setEid] = useState("");
  const [apikey, setApikey] = useState("");
  const [apisecret, setApisecret] = useState("");
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    axios
      .post("/insert", data)
      .then((data) => {
        alert("Input Berhasil, OK");
        setUid("");
        setEid("");
        setApikey("");
        setApisecret("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    socket.on("uid", (data) => {
      setUid(data);
    });
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Insert Auth RSUIBB Employee
        </Typography>
        <form
          className={classes.form}
          // noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={uid}
                onChange={(e) => {
                  setUid(e.target.value);
                }}
                name="uid"
                variant="outlined"
                required
                fullWidth
                id="uid"
                label="NFC uid"
                autoFocus
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="eid"
                label="Employee ID"
                name="eid"
                inputRef={register}
                value={eid}
                onChange={(e) => setEid(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="apikey"
                label="API Key"
                name="apikey"
                inputRef={register}
                value={apikey}
                onChange={(e) => {
                  setApikey(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="apisecret"
                label="API Secret"
                id="apisecret"
                inputRef={register}
                value={apisecret}
                onChange={(e) => {
                  setApisecret(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
}
