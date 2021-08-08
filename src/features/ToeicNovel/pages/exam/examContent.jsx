import React from "react";
import PropTypes from "prop-types";
import ExamItem from "./examItem";
import { Button, List, ListSubheader, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const ExamContent = (props) => {
  const { word, data, onSubmit, checked, setChecked } = props;
  const classes = useStyles();
  return (
    <>
      <List
        className={classes.root}
        subheader={<ListSubheader component="div">{word}</ListSubheader>}
      >
        {data.map((item, index) => (
          <ExamItem
            key={index}
            content={item.trim().toLowerCase()}
            checked={checked === index}
            onClick={() => setChecked(index)}
            labelId={`${index}`}
          />
        ))}
      </List>
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
    </>
  );
};

ExamContent.propTypes = {
  onSubmit: PropTypes.func,
  data: PropTypes.array,
  word: PropTypes.string,
};

export default ExamContent;
