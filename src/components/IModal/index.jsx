import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Loading from "../Loading";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const IModal = (props) => {
  const { open, children, onClose, title, submit, isLoading, transition } =
    props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const handleClose = () => {
    onClose(false);
  };
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        TransitionComponent={transition ? transition : Transition}
        keepMounted
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{isLoading ? <Loading /> : children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Đóng
          </Button>
          {submit}
        </DialogActions>
      </Dialog>
    </>
  );
};

IModal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.string,
  submit: PropTypes.element,
  open: PropTypes.bool,
  isLoading: PropTypes.bool,
  transition: PropTypes.object,
};

IModal.defaultProps = {
  isLoading: false,
};

export default IModal;
