import React from "react";
import PropTypes from "prop-types";
import ExamItem from "./examItem";
import {
  Button,
  List,
  ListSubheader,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  word: { userSelect: "none" },
}));

const ExamContent = (props) => {
  const {
    count,
    length,
    word,
    data,
    onSubmit,
    checked,
    setChecked,
    next,
    onNext,
  } = props;
  const classes = useStyles();
  return (
    <>
      <List
        className={classes.root}
        subheader={
          <ListSubheader component="div" className={classes.word}>
            Câu {length - count}/{length} |{" "}
            <Typography component="span" color="secondary" variant="h6">
              {word.trim().toLowerCase()}
            </Typography>
          </ListSubheader>
        }
      >
        {data.map((item, index) => (
          <ExamItem
            key={index}
            content={item.trim().toLowerCase()}
            checked={checked === index}
            onClick={() => !next && setChecked(index)}
            labelId={`${index}`}
          />
        ))}
      </List>
      {next ? (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={onNext}
        >
          Bài tiếp theo
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          size="large"
          disabled={checked === -1}
          onClick={() => onSubmit(checked)}
        >
          Kiểm tra
        </Button>
      )}
    </>
  );
};

ExamContent.propTypes = {
  onSubmit: PropTypes.func,
  data: PropTypes.array,
  word: PropTypes.string,
  length: PropTypes.number,
  count: PropTypes.number,
  next: PropTypes.bool,
  onNext: PropTypes.func,
};

export default ExamContent;
