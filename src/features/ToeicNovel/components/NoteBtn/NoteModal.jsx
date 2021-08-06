import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import React from "react";
import IModal from "../../../../components/IModal";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  text: {
    width: "500px",
    maxWidth: "100%",
    height: "100%",
  },
}));

const NoteModal = (props) => {
  const { data, dataChange } = props;
  const classes = useStyles();
  return (
    <IModal {...props}>
      <TextField
        label="Ghi chú"
        multiline
        rows={20}
        variant="outlined"
        className={classes.text}
        value={data}
        autoFocus
        onChange={dataChange}
      />
    </IModal>
  );
};

NoteModal.propTypes = {
  data: PropTypes.string,
};

export default NoteModal;
