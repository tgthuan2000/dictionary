import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Header from "../../components/Header";
import ReadContent from "./readContent";
import ReadModal from "./readModal";

const ReadNovel = (props) => {
  const [word, setWord] = useState({});
  const { data } = props;
  const { title, content, words } = data;
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleContentClick = (word) => {
    setLoading(true);
    const { vi } = words.find(({ en }) => en === word);
    async function getWord() {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
        );
        console.log(...response.data);
        setWord({ vi, info: response.data });
        setLoading(false);
      } catch (error) {
        // console.error(error);
        setWord({ vi });
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
      <ReadContent
        content={content}
        words={words}
        onClick={handleContentClick}
      />
      <ReadModal
        open={modal}
        onClose={handleCloseModal}
        data={word}
        isLoading={loading}
      />
    </>
  );
};

ReadNovel.propTypes = {
  data: PropTypes.object,
};

export default ReadNovel;
