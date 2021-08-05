import React, { Fragment } from "react";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@material-ui/core";
import HideOnScroll from "../../../../components/HideOnScroll";
import PropTypes from "prop-types";

function NavText(props) {
  const { text, children, bgColor } = props;
  return (
    <div>
      <Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar color={bgColor ? bgColor : "secondary"}>
            <Toolbar>
              {text && <Typography variant="h6">{text}</Typography>}
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Container disableGutters>
          <Box my={2}>{children}</Box>
        </Container>
      </Fragment>
    </div>
  );
}

NavText.propTypes = {
  text: PropTypes.string,
  children: PropTypes.element,
};

export default NavText;
