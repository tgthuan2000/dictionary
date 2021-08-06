import React from "react";
import loadingImg from "../../loading.gif";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  loading: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "200px",
    height: "200px",
  },
});
const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loading}>
      <img className={classes.img} src={loadingImg} alt="loading..." />
    </div>
  );
};

export default Loading;
