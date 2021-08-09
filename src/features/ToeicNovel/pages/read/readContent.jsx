import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  word: {
    cursor: "pointer",
    userSelect: "none",
  },
}));
const ReadContent = (props) => {
  const classes = useStyles();
  //content: đoạn văn
  //words: mảng các vocabulảy
  const { content, words, onClick } = props;
  return (
    <Typography component="p">
      {content.split("(*)").map((item, index, { length }) => [
        item,
        index !== length - 1 && (
          <Typography
            component="span"
            key={index}
            color="secondary"
            className={classes.word}
            onClick={() => onClick(words[index].en.trim())}
          >
            {/* (${index + 1}) */}
            {`${words[index].en.trim()}`}
          </Typography>
        ),
      ])}
    </Typography>
  );
};

ReadContent.propTypes = {
  content: PropTypes.string.isRequired,
  words: PropTypes.array,
  onClick: PropTypes.func,
};

export default ReadContent;
