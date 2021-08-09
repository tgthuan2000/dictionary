import { makeStyles } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import AlertText from "../../../../components/AlertText";
import ParagraphForm from "./paragraphForm";
import ErrorSound from "../../../../sound effect/error.wav";
import randomParagraph from "./paragraphRandom";
import SuccessSound from "../../../../sound effect/success.wav";
import FaildSound from "../../../../sound effect/faild.wav";
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
  

  const handleSubmit = () => {
    if (correct.trim().toLowerCase() === value.trim().toLowerCase()) {
      if (words.length !== 0)
        setContent(randomParagraph(words, setWords, data.words));
      else setShowResult(true);
      setAlert({ open: false, status: "", message: "" });
      setValue("");

      if (pass.current) setCount(count + 1);
      pass.current = true;
    } else {
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
    setAlert({ open: false, status: "", message: "" });
  };
  const handleShowAnswer = () => {
    if (words.length !== 0)
      setContent(randomParagraph(words, setWords, data.words));
    else setShowResult(true);
    setValue("");
    pass.current = true;
    setAlert({
      open: true,
      status: "warning",
      message: `${word.trim().toLowerCase()} - ${correct.trim().toLowerCase()}`,
    });
  };
  return (
    <div className={classes.root}>
      <AlertText
        open={alert.open}
        content={alert.message}
        onClose={() => setAlert({ ...alert, open: false })}
        sound={ErrorSound}
        status={alert.status}
      />
      {!loading && !showResult && (
        <ParagraphForm
          value={value}
          setValue={setValue}
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
            src={count / data.words.length >= 0.5 ? SuccessSound : FaildSound}
          />
        </>
      )}
    </div>
  );
};

Paragraph.propTypes = {};

export default Paragraph;
