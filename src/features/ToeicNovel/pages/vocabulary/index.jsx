import React from "react";
import PropTypes from "prop-types";
import VocabularyList from "./vocabularyList";

const Vocabulary = (props) => {
  const { data } = props;
  const { words } = data;
  return <VocabularyList list={words} />;
};

Vocabulary.propTypes = {
  data: PropTypes.object,
};

export default Vocabulary;
