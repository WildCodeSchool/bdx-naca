import React from "react";
import { makeStyles } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import UserReviewList from "./components/UserReviewList";
import AccueilProp from "./components/AccueilProp";
import AccueilLoc from "./components/AccueilLoc";
import Accroche from "./components/Accroche";

const useStyles = makeStyles((theme) => ({
  carduser: {
    display: "flex",
    margin: 50,
  },
}));

function Home(props) {
  const classes = useStyles();
  return (
    <>
      <div>
        <Accroche />
      </div>
      <div>
        <SearchBar />
      </div>

      <div className={classes.carduser}>
        <UserReviewList />
        <AccueilLoc />
        <AccueilProp />
      </div>
    </>
  );
}

export default Home;
