import React from "react";
import PropTypes from "prop-types";
import IModal from "../../../../components/IModal";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { VolumeUpOutlined } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflowX: "hidden",
  },
  buttonWrap: {
    display: "inline-flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));
const ReadModal = (props) => {
  const classes = useStyles();
  const { data } = props;
  const { vi, en, infors } = data;
  if (vi && en) {
    return (
      <IModal {...props}>
        <div className={classes.paper}>
          <Typography variant="h6" color="primary" gutterBottom>
            {en && en.trim().toLowerCase()}
          </Typography>
          <Typography color="textSecondary">
            Phiên dịch:{" "}
            <Typography component="span" color="textPrimary">
              {vi && vi.trim().toLowerCase()}
            </Typography>
          </Typography>
          {infors && (
            <div>
              <Typography component="span" color="textSecondary">
                Phiên âm:{" "}
              </Typography>
              {infors[0].phonetics.map(({ text, audio }, index) => (
                <Typography
                  component="span"
                  className={classes.buttonWrap}
                  key={index}
                  color="textSecondary"
                >
                  <Typography component="span" color="textPrimary">
                    {text}
                  </Typography>
                  <IconButton
                    className={classes.button}
                    onClick={() =>
                      document.getElementById(`audio-${index}`).play()
                    }
                  >
                    <VolumeUpOutlined fontSize="small" />
                  </IconButton>
                  <audio src={audio} id={`audio-${index}`} />
                </Typography>
              ))}
            </div>
          )}
          {/* <small>{JSON.stringify(info)}</small> */}
        </div>
      </IModal>
    );
  } else return null;
};

ReadModal.propTypes = {
  data: PropTypes.object,
};

export default ReadModal;
