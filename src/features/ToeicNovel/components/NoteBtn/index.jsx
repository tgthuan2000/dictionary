import { Fab, makeStyles, Slide, Zoom } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { Edit } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { KEY_NOTE } from "../../../../localStorageContans";
import NoteModal from "./NoteModal";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: "10",
  },
  noteColor: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const NoteBtn = () => {
  console.log("render");
  const classes = useStyles();
  const [note, setNote] = useState(() => {
    return JSON.parse(localStorage.getItem(KEY_NOTE)) || "";
  });
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    localStorage.setItem(KEY_NOTE, JSON.stringify(note));
    setOpen(false);
  };
  return (
    <>
      <div className={classes.root} onClick={() => setOpen(true)}>
        <Zoom
          in={true}
          style={{
            transitionDelay: "1200ms",
          }}
        >
          <Fab className={classes.noteColor} size="medium">
            <Edit />
          </Fab>
        </Zoom>
      </div>

      <NoteModal
        open={open}
        transition={Transition}
        onClose={handleCloseModal}
        data={note}
        dataChange={(e) => setNote(e.target.value)}
      />
    </>
  );
};

export default NoteBtn;
