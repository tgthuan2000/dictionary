import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Container } from "@material-ui/core";

function App() {
  const toeicNovelComponent = React.lazy(() => import("./features/ToeicNovel"));
  return (
    <div className="dictionary-app">
      <Suspense fallback={<div>Loading</div>}>
        <Router>
          <Container maxWidth="sm">
            <Switch>
              <Redirect exact from="/" to="/toeic-novel" />
              <Route path="/toeic-novel" component={toeicNovelComponent} />
            </Switch>
          </Container>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
