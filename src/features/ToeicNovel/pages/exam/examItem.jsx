import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

const ExamItem = (props) => {
  const { content, checked, labelId, onClick } = props;
  return (
    <ListItem role={undefined} dense button onClick={onClick}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={content} />
    </ListItem>
  );
};

ExamItem.propTypes = {
  content: PropTypes.string,
};

export default ExamItem;
