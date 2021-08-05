import React from "react";
import { ToeicNovel } from "../../../../init/toeic-novel";
import NavBar from "../../components/NavBar";

const MainPage = () => {
  const MenuContentComponent = React.lazy(() =>
    import("../../components/MenuContent")
  );
  return (
    <NavBar header="Tiểu thuyết Toeic" color="secondary">
      <MenuContentComponent list={ToeicNovel} />
    </NavBar>
  );
};

export default MainPage;
