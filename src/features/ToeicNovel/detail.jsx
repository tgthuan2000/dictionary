import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import NoteBtn from "../../components/NoteBtn";
import NotFound from "../../components/NotFound";
import { ToeicNovel } from "../../init/toeic-novel";
import NavBar from "./components/NavBar";
import ReadNovel from "./pages/read";

const Detail = () => {
  const match = useRouteMatch();
  const { novelId } = useParams();
  return ToeicNovel.find(({ id }) => id === novelId) ? (
    <>
      <NavBar>
        <Switch>
          {/* <Route exact path={`${match.path}/note`} component={note} />
                <Route exact path={`${match.path}/paragraph`} component={paragraph} />
                <Route exact path={`${match.path}/vocabulary`} component={vocabulary} />
              <Route exact path={`${match.path}/exam`} component={exam} /> */}
          <Route path={`${match.path}`} component={ReadNovel} />
        </Switch>
      </NavBar>
      <NoteBtn />
    </>
  ) : (
    <NotFound />
  );
};

export default Detail;
