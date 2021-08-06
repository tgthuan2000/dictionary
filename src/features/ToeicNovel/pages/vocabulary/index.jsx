import React from "react";
import Header from "../../components/Header";
import PropTypes from "prop-types";
import VocabularyList from "./vocabularyList";

const Vocabulary = (props) => {
  const { data } = props;
  const { title, words } = data;
  return (
    <>
      <Header title={title} color="primary" variant="h5" component="p" />
      <VocabularyList list={words} />
    </>
  );
};

Vocabulary.propTypes = {
  data: PropTypes.object,
};

export default Vocabulary;
