import React from "react";
import PropTypes from "prop-types";
import { Backdrop, Modal } from "@material-ui/core";
import Fade from "./Fade";

const IModal = (props) => {
  const { open, modalClass, paperClass, children, onClose } = props;
  return (
    <Modal
      className={modalClass}
      open={open}
      onClose={() => onClose(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={paperClass}>{children}</div>
      </Fade>
    </Modal>
  );
};

IModal.propTypes = {
  open: PropTypes.bool,
  modalClass: PropTypes.string,
  paperClass: PropTypes.string,
  children: PropTypes.element,
  onClose: PropTypes.func,
};

export default IModal;
