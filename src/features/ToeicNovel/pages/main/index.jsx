import React from "react";
import { ToeicNovel } from "../../../../init/toeic-novel";
import Header from "../../components/Header";

const MainPage = () => {
  const MenuContentComponent = React.lazy(() =>
    import("../../components/MenuContent")
  );
  return (
    <div className="toeic-novel-main">
      <Header title={"hello"} />
      <MenuContentComponent list={ToeicNovel} />
    </div>
  );
};

export default MainPage;
