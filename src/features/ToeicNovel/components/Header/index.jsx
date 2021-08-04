import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const { title } = props;
  return <div>{title}</div>;
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "",
};

export default Header;
