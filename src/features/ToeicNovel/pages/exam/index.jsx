import { makeStyles } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import ExamAlert from "./examAlert";
import ExamContent from "./examContent";
import { randomContent } from "./examRandom";
import ExamResult from "./examResult";
import FinishSound from "../../../../sound effect/success.wav";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Examinate = (props) => {
  const classes = useStyles();
  const { data } = props;
  // console.log(data);
  const [words, setWords] = useState(data.words);
  const [check, setCheck] = useState(-1);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [count, setCount] = useState(0);
  const pass = useRef(true);
  const [content, setContent] = useState({
    correct: "",
    answers: [],
    word: "",
  });
  const { correct, answers, word } = content;
  // console.log("render");
  // console.log({ correct, answers, word });
  useEffect(() => {
    if (loading && words.length > 0) {
      setLoading(false);
      setContent(randomContent(words, setWords, data.words));
    }
  }, [data, words, loading]);

  const handleSubmit = (index) => {
    if (answers[index] === correct) {
      if (words.length !== 0)
        setContent(randomContent(words, setWords, data.words));
      else setShowResult(true);
      setAlert(false);
      setCheck(-1);

      if (pass.current) setCount(count + 1);
      pass.current = true;
    } else {
      pass.current = false;
      setAlert(true);
    }
  };
  const handleReset = () => {
    setWords(data.words);
    setLoading(true);
    setCount(0);
    setShowResult(false);
  };
  return (
    <div className={classes.root}>
      <ExamAlert
        open={alert}
        content={"Đáp án không chính xác!!!"}
        onClose={() => setAlert(false)}
      />
      {!loading && !showResult && (
        <ExamContent
          data={answers}
          word={word}
          length={data.words.length}
          count={words.length}
          onSubmit={handleSubmit}
          checked={check}
          setChecked={(index) => setCheck(index)}
        />
      )}
      {showResult && (
        <>
          <ExamResult
            onReset={handleReset}
            count={count}
            length={data.words.length}
          />
          <audio autoPlay src={FinishSound} />
        </>
      )}
    </div>
  );
};

Examinate.propTypes = {};

export default Examinate;
