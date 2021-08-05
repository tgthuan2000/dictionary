import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "../../components/NotFound";
import { ToeicNovel } from "../../init/toeic-novel";
import NavBar from "./components/NavBar";
import NoteBtn from "./components/NoteBtn";

const Detail = () => {
  const { novelId } = useParams();
  return ToeicNovel.find(({ id }) => id === novelId) ? (
    <>
      <NavBar />
      <NoteBtn />
    </>
  ) : (
    <NotFound />
  );
};

export default Detail;
