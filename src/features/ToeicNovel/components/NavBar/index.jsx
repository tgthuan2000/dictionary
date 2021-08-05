import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";

const NavBar = (props) => {
  const { children, header, color } = props;
  return (
    <div>
      <Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar color={color}>
            <Toolbar>
              <Typography variant="h6">{header}</Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Container disableGutters>
          <Box my={1}>{children}</Box>
        </Container>
      </Fragment>
    </div>
  );
};

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default NavBar;
