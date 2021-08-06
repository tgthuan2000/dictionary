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
        {list.map((word, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography className={classes.heading}>
                {word.toLowerCase().trim()}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {word.toLowerCase().trim()}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
