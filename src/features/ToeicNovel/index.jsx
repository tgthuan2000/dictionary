import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/main";
import NoteBtn from "../../components/NoteBtn";
import Detail from "./detail";

const ToeicNovel = () => {
  const match = useRouteMatch();
  return (
    <>
      <NoteBtn />
      <Switch>
        <Route path={`${match.path}/:novelId`} component={Detail} />
        <Route path={match.path} component={MainPage} />
      </Switch>
    </>
  );
};

export default ToeicNovel;
