import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const Content = (props) => {
  //content: đoạn văn
  //words: mảng các vocabulảy
  const { content, className, words, onClick } = props;
  return (
    <Typography component="p">
      {content.split("(*)").map((item, index, { length }) => [
        item,
        index !== length - 1 && (
          <Typography
            component="span"
            key={index}
            color="secondary"
            className={className}
            onClick={() => onClick(words[index])}
          >
            {/* (${index + 1}) */}
            {`${words[index]}`}
          </Typography>
        ),
      ])}
    </Typography>
  );
};

Content.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  words: PropTypes.array,
  onClick: PropTypes.func,
};

export default Content;
