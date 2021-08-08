import React, { Fragment, useEffect, useState } from "react";
import {
  AppBar,
  Container,
  CssBaseline,
  Fab,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  Toolbar,
} from "@material-ui/core";
import {
  FingerprintOutlined,
  HomeOutlined,
  KeyboardArrowUp,
  LibraryBooksOutlined,
  NoteAddOutlined,
  SpellcheckOutlined,
  ViewHeadlineOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ReadNovel from "../../pages/read";
import Vocabulary from "../../pages/vocabulary";
import Examinate from "../../pages/exam";
import Paragraph from "../../pages/paragraph";
import NotePage from "../../pages/note";
import HideOnScroll from "../../../../components/HideOnScroll";
import TabPanel from "./TabPanel";
import ScrollTop from "./ScrollTop";
import { ToeicNovel } from "../../../../init/toeic-novel";
import { useParams } from "react-router-dom";
import axios from "axios";
import { KEY_TRANSLATE } from "../../../../localStorageContans";
import Loading from "../../../../components/Loading";
import { translateMymemory } from "./apiOption";
import UpdateLocalStorage from "./updateLocalStorage";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

function NavBar(props) {
  let history = useHistory();
  const { novelId } = useParams();
  const toeic = ToeicNovel.find((x) => x.id === novelId);
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const [loadData, setLoadData] = useState(false);
  const [trans, setTrans] = useState(() => {
    const data = JSON.parse(localStorage.getItem(KEY_TRANSLATE));
    if (!data) return [];
    const index = data.findIndex(({ id }) => id === novelId);
    if (index === -1) return [];
    const { trans, key } = data[index];
    return { trans, key };
  });
  useEffect(() => {
    // console.log(trans.key, toeic.key);
    if (trans.key !== toeic.key) {
      setLoadData(true);
      const result = toeic.words.reduce(async (init, word) => {
        const request = await axios.request(translateMymemory(word));
        const data = await request.data;
        const {
          responseData: { translatedText: vi },
        } = await data;
        // console.log(vi);
        return [...(await init), vi];
      }, []);

      // test
      // const result = new Promise((resolve) => {
      //   return resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      // });

      result.then((trans) => {
        setTrans({ trans, key: toeic.key });
        setLoadData(false);
        UpdateLocalStorage(novelId, trans, toeic.key);
      });
    }
    // console.log("render");
  }, [novelId, toeic, trans]);

  return (
    <Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
          <Toolbar disableGutters>
            <Paper square className={classes.paper}>
              <Tabs
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                indicatorColor="secondary"
                textColor="secondary"
                variant="scrollable"
                scrollButtons="on"
              >
                <Tab
                  icon={<HomeOutlined />}
                  label="Trang chủ"
                  onClick={() => history.push("/")}
                />
                <Tab
                  icon={<LibraryBooksOutlined />}
                  label="Mẫu truyện"
                  {...a11yProps(1)}
                />
                <Tab
                  icon={<SpellcheckOutlined />}
                  label="Từ vựng"
                  {...a11yProps(2)}
                />
                <Tab
                  icon={<FingerprintOutlined />}
                  label="Kiểm tra"
                  {...a11yProps(3)}
                />
                <Tab
                  icon={<ViewHeadlineOutlined />}
                  label="Văn bản"
                  {...a11yProps(4)}
                />
                <Tab
                  icon={<NoteAddOutlined />}
                  label="Ghi chú"
                  {...a11yProps(5)}
                />
              </Tabs>
            </Paper>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <Container disableGutters>
        {loadData ? (
          <div className="dictionary-app-loading">
            <Loading />
          </div>
        ) : (
          <>
            <TabPanel value={value} index={1}>
              <ReadNovel data={toeic} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Vocabulary data={toeic} trans={trans.trans} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Examinate data={toeic} trans={trans.trans} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Paragraph data={toeic} />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <NotePage data={toeic} />
            </TabPanel>
          </>
        )}
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="medium">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </Fragment>
  );
}

NavBar.propTypes = {};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

export default NavBar;
