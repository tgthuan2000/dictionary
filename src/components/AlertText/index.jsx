import React from "react";
import PropTypes from "prop-types";
import { Collapse, IconButton } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Close } from "@material-ui/icons";
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	alert:{
		userSelect: "none"
	}
}))

const AlertText = (props) => {
const classes = useStyles()
  const { content, onClose, open, status } = props;
  return (
    <Collapse in={open}>
      <Alert
		className={classes.alert}
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
  );
};

AlertText.propTypes = {
  content: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  status: PropTypes.string,
};
AlertText.defaultProps = {
  status: "error",
};

export default AlertText;
