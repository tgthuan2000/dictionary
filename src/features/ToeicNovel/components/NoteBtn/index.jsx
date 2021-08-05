import { Fab, makeStyles } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: "10",
  },
}));
const NoteBtn = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fab color="primary" size="small">
        <Edit />
      </Fab>
    </div>
  );
};

export default NoteBtn;
