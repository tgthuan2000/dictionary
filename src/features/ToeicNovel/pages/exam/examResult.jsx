import React from "react";
import PropTypes from "prop-types";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    padding: theme.spacing(2),
  },
}));

const ExamResult = (props) => {
  const classes = useStyles();
  const { onReset, count, length } = props;
  const percent = (count * 100) / length;
  return (
    <Paper className={classes.root}>
      <Typography variant="h4" color="secondary" gutterBottom>
        Kết quả
      </Typography>
      {/* score -> count/length | percent*/}
      <Typography
        variant="h6"
        color={percent >= 50 ? "primary" : "textSecondary"}
        gutterBottom
      >
        {count}/{length} | {percent.toFixed(2)}%
      </Typography>
      {/* btn reset */}
      <Button variant="contained" fullWidth color="primary" onClick={onReset}>
        Làm lại
      </Button>
    </Paper>
  );
};

ExamResult.propTypes = {
  onReset: PropTypes.func,
  count: PropTypes.number,
  length: PropTypes.number,
};

export default ExamResult;
