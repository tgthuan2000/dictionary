import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/main";
import Detail from "./detail";

const ToeicNovel = () => {
  const match = useRouteMatch();
  return (
    <div style={{ padding: "16px 0" }}>
      <Switch>
        <Route path={`${match.path}/:novelId`} component={Detail} />
        <Route path={match.path} component={MainPage} />
      </Switch>
    </div>
  );
};

export default ToeicNovel;
