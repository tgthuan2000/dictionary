import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Container } from "@material-ui/core";
import NotFound from "./components/NotFound";
import Loading from "./components/Loading";

function App() {
  const toeicNovelComponent = React.lazy(() => import("./features/ToeicNovel"));
  return (
    <div className="dictionary-app">
      <Suspense fallback={<Loading />}>
        <Router>
          <Container maxWidth="sm">
            <Switch>
              <Redirect exact from="/" to="/toeic-novel" />
              <Route path="/toeic-novel" component={toeicNovelComponent} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
