import React from "react";
import { ToeicNovel } from "../../../../init/toeic-novel";
import NavText from "../../components/NavText";

const MainPage = () => {
  const MenuContentComponent = React.lazy(() =>
    import("../../components/MenuContent")
  );
  return (
    <NavText text="Tiểu thuyết toeic">
      <MenuContentComponent list={ToeicNovel} />
    </NavText>
  );
};

export default MainPage;
