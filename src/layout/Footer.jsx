import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  foot: {
    height: "60",
    display: "flex",
    backgroundColor: "#FFF2D9",
    listStyle: "none",
    justifyContent: "center",
  },
  button: {
    color: "white",
    backgroundColor: "#F6C179",
    "&:hover": {
      background: "#4E96AF",
    },
    marginBottom: 10,
    height: "3em",
    marginTop: "20px",
    fontFamily: "'Comfortaa', cursive",
    marginLeft: 50,
  },
}));

function Copyright() {
  useStyles();
  return (
    <Typography
      align="center"
      variant="body2"
      to="/"
      component={Link}
      color="textSecondary"
    >
      {"Copyright © "}
      TocToc
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.foot}>
      <Button
        className={classes.button}
        to="/contact"
        component={Link}
        variant="contained"
        color="primary"
      >
        Contact
      </Button>
      <Box mt={4}>
        <Copyright />
      </Box>
    </div>
  );
}

export default Footer;
