import { makeStyles } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import AlertText from "../../../../components/AlertText";
import ParagraphForm from "./paragraphForm";
import randomParagraph from "./paragraphRandom";
import WinSound from "../../../../sound effect/win.wav";
import LoseSound from "../../../../sound effect/lose.mp3";
import ShowAnswerSound from "../../../../sound effect/lose.wav";
import ResultNav from "../../components/ResultNav";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Paragraph = (props) => {
  const classes = useStyles();
  const { data } = props;
  const [words, setWords] = useState(data.words);
  const [loading, setLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [alert, setAlert] = useState({ open: false, status: "", message: "" });
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const pass = useRef(true);
  const [content, setContent] = useState({ correct: "", word: "" });
  const { correct, word } = content;

  useEffect(() => {
    if (loading && words.length > 0) {
      setLoading(false);
      setContent(randomParagraph(words, setWords, data.words));
    }
  }, [data, words, loading]);

  useEffect(() => {
    const setTime = setTimeout(() => {
      if (alert.open && alert.status === "error")
        setAlert({ ...alert, open: false });
    }, 3000);
    return () => clearTimeout(setTime);
  }, [alert]);

  const handleSubmit = () => {
    if (correct.trim().toLowerCase() === value.trim().toLowerCase()) {
      document.getElementById("audio-success").play();
      if (words.length !== 0)
        setContent(randomParagraph(words, setWords, data.words));
      else setShowResult(true);
      setAlert({ open: false, status: "", message: "" });
      setValue("");

      if (pass.current) setCount(count + 1);
      pass.current = true;
    } else {
      document.getElementById("audio-error").play();
      pass.current = false;
      setAlert({
        open: true,
        status: "error",
        message: "Đáp án không chính xác!!!",
      });
    }
  };
  const handleReset = () => {
    setWords(data.words);
    setLoading(true);
    setCount(0);
    setShowResult(false);
    setValue("");
  };
  const handleShowAnswer = () => {
    document.getElementById("audio-show-answer").play();
    setValue("");
    pass.current = false;
    setAlert({
      open: true,
      status: "warning",
      message: `${word.trim().toLowerCase()} - ${correct.trim().toLowerCase()}`,
    });
  };
  const handleChangeValue = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (inputValue.trim() !== "" && alert.status === "warning")
      setAlert({ ...alert, open: false });
  };

  const handleKeyPress = (e) => {
    if ((value.trim() !== "" && e.which === 13) || e.keyCode === 13)
      handleSubmit();
  };
  return (
    <>
      <div className={classes.root}>
        <AlertText
          open={alert.open}
          content={alert.message}
          onClose={() => setAlert({ ...alert, open: false })}
          status={alert.status}
        />
        {!loading && !showResult && (
          <ParagraphForm
            value={value}
            onChange={handleChangeValue}
            onKeyPress={handleKeyPress}
            onSubmit={handleSubmit}
            count={words.length}
            length={data.words.length}
            word={word}
            showAnswer={handleShowAnswer}
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
      <audio src={ShowAnswerSound} id="audio-show-answer" />
    </>
  );
};

Paragraph.propTypes = {};

export default Paragraph;
