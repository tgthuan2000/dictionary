import React, { useState } from "react";
import PropTypes from "prop-types";
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
    overflowX: "hidden",
  },
}));

const ReadNovel = (props) => {
  const classes = useStyles();
  const [word, setWord] = useState({});
  const { data } = props;
  const { title } = data;
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleContentClick = (word) => {
    setLoading(true);
    async function getWord() {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
        );
        console.log(...response.data);
        setWord(...response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setWord("404 not found");
        setLoading(false);
      }
    }
    getWord();
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <Header title={title} color="primary" variant="h5" component="p" />
      <Content
        className={classes.word}
        {...data}
        onClick={handleContentClick}
      />
      <ReadModal
        open={modal}
        onClose={handleCloseModal}
        paperClass={classes.paper}
        data={JSON.stringify(word)}
        isLoading={loading}
      />
    </>
  );
};

ReadNovel.propTypes = {
  data: PropTypes.object,
};

export default ReadNovel;
