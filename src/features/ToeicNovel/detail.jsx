import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ReadNovel from "./pages/read";

const Detail = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      {/* <Route exact path={`${match.path}/note`} component={note} />
      <Route exact path={`${match.path}/paragraph`} component={paragraph} />
      <Route exact path={`${match.path}/vocabulary`} component={vocabulary} />
    <Route exact path={`${match.path}/exam`} component={exam} /> */}
      <Route path={`${match.path}`} component={ReadNovel} />
    </Switch>
  );
};

export default Detail;
