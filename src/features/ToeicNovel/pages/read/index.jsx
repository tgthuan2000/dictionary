import React from "react";
import { useParams } from "react-router-dom";
import { ToeicNovel } from "../../../../init/toeic-novel";
import { Typography } from "@material-ui/core";

const ReadNovel = () => {
  const { novelId } = useParams();
  const toeic = ToeicNovel.find((x) => x.id === novelId);
  const { words, content } = toeic;
  return (
    <Typography variant="h5" component="p">
      {content.map((x, index) => [x, <b key={index}>{words[index]}</b>])}
    </Typography>
  );
};

export default ReadNovel;
