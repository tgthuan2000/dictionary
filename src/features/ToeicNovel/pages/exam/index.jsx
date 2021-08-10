import { makeStyles } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import ExamContent from "./examContent";
import randomExam from "./examRandom";
import SuccessSound from "../../../../sound effect/success.wav";
import ErrorSound from "../../../../sound effect/error.wav";
import FaildSound from "../../../../sound effect/faild.wav";
import AlertText from "../../../../components/AlertText";
import ResultNav from "../../components/ResultNav";

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
      setContent(randomExam(words, setWords, data.words));
    }
  }, [data, words, loading]);

  const handleSubmit = (index) => {
    if (answers[index] === correct) {
      if (words.length !== 0)
        setContent(randomExam(words, setWords, data.words));
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
    setCheck(-1);
  };
 
  return (
    <div className={classes.root}>
      <AlertText
        open={alert}
        content={"Đáp án không chính xác!!!"}
        onClose={() => setAlert(false)}
        sound={ErrorSound}
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
          <ResultNav
            onReset={handleReset}
            count={count}
            length={data.words.length}
          />
          <audio
            autoPlay
            src={count / data.words.length >= 0.5 ? SuccessSound : FaildSound}
          />
        </>
      )}
    </div>
  );
};

Examinate.propTypes = {};

export default Examinate;
