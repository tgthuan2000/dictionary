import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  IconButton,
  List,
  ListSubheader,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { VisibilityOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    flex: 1,
    marginBottom: theme.spacing(1),
  },
  word: {
    userSelect: "none",
    alignSelf: "flex-start",
  },
  wrapText: {
    width: "90%",
    display: "flex",
    alignItems: "center",
  },
}));

const ParagraphForm = (props) => {
  const {
    value,
    onChange,
    onKeyPress,
    onSubmit,
    count,
    length,
    word,
    showAnswer,
  } = props;
  const classes = useStyles();
  return (
    <>
      <List
        className={classes.root}
        subheader={
          <ListSubheader component="div" className={classes.word}>
            Câu {length - count}/{length} |{" "}
            <Typography component="span" color="primary" variant="h6">
              {word.trim().toLowerCase()}
            </Typography>
          </ListSubheader>
        }
      >
        <div className={classes.wrapText}>
          <TextField
            label="Đáp án"
            value={value}
            onChange={(e) => onChange(e)}
            className={classes.textField}
            onKeyPress={(e) => onKeyPress(e)}
          />
          <IconButton onClick={showAnswer}>
            <VisibilityOutlined fontSize="medium" />
          </IconButton>
        </div>
      </List>
      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        disabled={value.trim() === ""}
        onClick={onSubmit}
      >
        Kiểm tra
      </Button>
    </>
  );
};

ParagraphForm.propTypes = {
  showAnswer: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onSubmit: PropTypes.func,
  count: PropTypes.number,
  length: PropTypes.number,
  word: PropTypes.string,
};

export default ParagraphForm;
