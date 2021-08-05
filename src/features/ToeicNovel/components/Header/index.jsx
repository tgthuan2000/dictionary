import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const Header = (props) => {
  const { title } = props;
  return (
    <Typography
      variant="h4"
      component="h4"
      align="center"
      color="secondary"
      gutterBottom
      {...props}
    >
      {title}
    </Typography>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "",
};

export default Header;
