import React from "react";
import PropTypes from "prop-types";
import { Collapse, IconButton } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Close } from "@material-ui/icons";

const AlertText = (props) => {
  const { content, onClose, open, sound, status } = props;
  return (
    <>
      <Collapse in={open}>
        <Alert
          severity={status}
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
      {open && sound && <audio autoPlay src={sound} />}
    </>
  );
};

AlertText.propTypes = {
  content: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  sound: PropTypes.string,
  status: PropTypes.string,
};
AlertText.defaultProps = {
  status: "error",
};

export default AlertText;
