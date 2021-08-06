import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ToeicNovel } from "../../../../init/toeic-novel";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import Header from "../../components/Header";
import Content from "./content";
import ReadModal from "./readModal";

const useStyles = makeStyles((theme) => ({
  word: {
    cursor: "pointer",
    userSelect: "none",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ReadNovel = () => {
  const classes = useStyles();
  const [word, setWord] = useState({});
  const { novelId } = useParams();
  const toeic = ToeicNovel.find((x) => x.id === novelId);
  const { title } = toeic;
  const [modal, setModal] = useState(false);

  const handleContentClick = (word) => {
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
    setModal(true);
  };
  const hanldCloseModal = () => {
    setModal(false);
    setWord({});
  };
  return (
    <>
      <Header title={title} color="primary" variant="h5" component="p" />
      <Content
        className={classes.word}
        {...toeic}
        onClick={handleContentClick}
      />
      <ReadModal
        open={modal}
        onClose={hanldCloseModal}
        modalClass={classes.modal}
        paperClass={classes.paper}
        data={JSON.stringify(word)}
      />
    </>
  );
};

export default ReadNovel;
