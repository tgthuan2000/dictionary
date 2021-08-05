import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ToeicNovel } from "../../../../init/toeic-novel";
import { Typography, makeStyles } from "@material-ui/core";
import axios from "axios";
import Header from "../../components/Header";

const useStyles = makeStyles({
  word: {
    cursor: "pointer",
    userSelect: "none",
  },
});
const ReadNovel = () => {
  const classes = useStyles();
  const [word, setWord] = useState({});
  const { novelId } = useParams();
  const toeic = ToeicNovel.find((x) => x.id === novelId);
  const { words, content, title } = toeic;

  const handleClick = (word) => {
    async function getWord() {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
        );
        console.log(...response.data);
        setWord(...response.data);
      } catch (error) {
        console.error(error);
        setWord("404 not found");
      }
    }
    getWord();
  };
  return (
    <>
      <Header title={title} color="primary" variant="h5" component="p" />
      <Typography component="p">
        {content.split("(*)").map((item, index, { length }) => [
          item,
          index !== length - 1 && (
            <Typography
              component="span"
              key={index}
              color="secondary"
              className={classes.word}
              onClick={() => handleClick(words[index])}
            >
              {/* (${index + 1}) */}
              {`${words[index]}`}
            </Typography>
          ),
        ])}
      </Typography>
      {JSON.stringify(word)}
    </>
  );
};

export default ReadNovel;
