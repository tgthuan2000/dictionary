import React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListSubheader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "50%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const VocabularyList = (props) => {
  const { list } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List
        component="nav"
        subheader={
          <ListSubheader component="div">
            Từ vựng (
            <Typography color="secondary" variant="subtitle2" component="span">
              {list.length}
            </Typography>{" "}
            từ)
          </ListSubheader>
        }
      >
        {list.map(({ en, vi }, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography className={classes.heading}>
                {en.toLowerCase().trim()}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {vi.toLowerCase().trim()}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </List>
    </div>
  );
};

VocabularyList.propTypes = {
  list: PropTypes.array,
};

VocabularyList.defaultProps = {
  list: [],
};

export default VocabularyList;
