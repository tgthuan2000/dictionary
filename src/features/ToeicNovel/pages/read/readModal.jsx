import React from "react";
import PropTypes from "prop-types";
import IModal from "../../../../components/IModal";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflowX: "hidden",
  },
}));
const ReadModal = (props) => {
  const classes = useStyles();
  const { data } = props;
  const { vi, info } = data;
  return (
    <IModal {...props}>
      <div className={classes.paper}>
        <Typography variant="h6" color="primary">
          {vi}
        </Typography>
        <small>{JSON.stringify(info)}</small>
      </div>
    </IModal>
  );
};

ReadModal.propTypes = {
  data: PropTypes.object,
};

export default ReadModal;
