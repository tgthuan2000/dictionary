import { Button, makeStyles } from "@material-ui/core";
import { CreateTwoTone } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: "10vh",
    right: "20px",
    zIndex: "10",
  },
  button: {
    margin: theme.spacing(1),
  },
}));
const NoteBtn = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<CreateTwoTone />}
      >
        Note
      </Button>
    </div>
  );
};

export default NoteBtn;
