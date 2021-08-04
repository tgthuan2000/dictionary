import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const MenuContent = (props) => {
  const { list } = props;
  const classes = useStyles();
  const match = useRouteMatch();
  return (
    <div className={classes.root}>
      <List component="nav">
        {list.map((item, index) => (
          <ListItem
            component="a"
            button
            href={`${match.url}/${item.id}`}
            key={index}
          >
            <ListItemText primary={`Story ${index + 1}: ${item.title}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

MenuContent.propTypes = {
  list: PropTypes.array,
};

MenuContent.defaultProps = {
  list: [],
};

export default MenuContent;
