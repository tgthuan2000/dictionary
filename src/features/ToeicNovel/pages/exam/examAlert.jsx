import React from "react";
import PropTypes from "prop-types";
import { Collapse, IconButton } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Close } from "@material-ui/icons";

const ExamAlert = (props) => {
  const { content, onClose, open, status } = props;
  return (
    <Collapse in={open}>
      <Alert
        severity={status ? "success" : "error"}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}
          >
            <Close fontSize="inherit" />
          </IconButton>
        }
      >
        {content}
      </Alert>
    </Collapse>
  );
};

ExamAlert.propTypes = {
  content: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default ExamAlert;