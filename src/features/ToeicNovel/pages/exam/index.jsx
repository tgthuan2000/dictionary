import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import ExamAlert from "./examAlert";
import ExamContent from "./examContent";
import randomContent from "./randomContent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Examinate = (props) => {
  const { data, trans } = props;
  // console.log(data, trans);
  const { words } = data;
  const [check, setCheck] = useState(-1);
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const [alert, setAlert] = useState({});
  useEffect(() => {
    setLoading(false);
    setContent(randomContent(words, trans));
  }, [words, trans]);
  const { correct, answers, word } = content;
  // console.log({ correct, answers, word });
  const handleCheck = (index) => {
    setCheck(index);
  };
  const handleSubmit = (index) => {
    if (answers[index] === correct) {
      setAlert({ open: true, status: true, content: "Đáp án chính xác!!!" });
      setCheck(-1);
      setContent(randomContent(words, trans, word));
    } else {
      setAlert({
        open: true,
        status: false,
        content: "Đáp án không chính xác!!!",
      });
    }
  };
  return (
    <div className={classes.root}>
      <ExamAlert
        open={alert.open}
        content={alert.content}
        status={alert.status}
        onClose={() => setAlert({ ...alert, open: false })}
      />
      {!loading && (
        <ExamContent
          data={answers}
          word={word}
          onSubmit={handleSubmit}
          checked={check}
          setChecked={handleCheck}
        />
      )}
    </div>
  );
};

Examinate.propTypes = {};

export default Examinate;
