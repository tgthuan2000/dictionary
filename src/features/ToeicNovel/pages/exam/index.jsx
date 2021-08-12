import { makeStyles } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import ExamContent from "./examContent";
import randomExam from "./examRandom";
import WinSound from "../../../../sound effect/win.wav";
import LoseSound from "../../../../sound effect/lose.mp3";
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

  const handleSubmit = (index) => {
    if (answers[index] === correct) {
      document.getElementById("audio-success").play();
      if (words.length !== 0)
        setContent(randomExam(words, setWords, data.words));
      else setShowResult(true);
      setAlert(false);
      setCheck(-1);

      if (pass.current) setCount(count + 1);
      pass.current = true;
    } else {
      document.getElementById("audio-error").play();
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

  useEffect(() => {
    const setTime = setTimeout(() => {
      if (alert) setAlert(false);
    }, 3000);
    return () => clearTimeout(setTime);
  }, [alert]);

    useEffect(() => {
    if (loading && words.length > 0) {
      setLoading(false);
      setContent(randomExam(words, setWords, data.words));
    }
  }, [data, words, loading]);
  return (
    <div className={classes.root}>
      <AlertText
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
          <ResultNav
            onReset={handleReset}
            count={count}
            length={data.words.length}
          />
          <audio
            autoPlay
            src={count / data.words.length >= 0.5 ? WinSound : LoseSound}
          />
        </>
      )}
    </div>
  );
};

Examinate.propTypes = {};

export default Examinate;
