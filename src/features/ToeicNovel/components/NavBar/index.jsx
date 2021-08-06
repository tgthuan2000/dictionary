import React, { Fragment, useState } from "react";
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
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

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
  const { novelId } = useParams();
  const toeic = ToeicNovel.find((x) => x.id === novelId);
  const classes = useStyles();
  const [value, setValue] = useState(1);
  let history = useHistory();
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
        <TabPanel value={value} index={1}>
          <ReadNovel data={toeic} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Vocabulary data={toeic} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Examinate data={toeic} />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Paragraph data={toeic} />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <NotePage data={toeic} />
        </TabPanel>
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