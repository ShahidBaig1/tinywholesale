import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import faqData from "./data";

const useStyles = makeStyles((theme) => ({
  faqContainer: {
    width: "80%",
    margin: "0 auto",
    padding: theme.spacing(3),
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  "@media (max-width: 800px)": {
    faqContainer: {
      width: "100%",
    },
  },
  accordion: {
    marginBottom: theme.spacing(2),
    boxShadow: "none",
    "&:last-child": {
      marginBottom: 0,
    },
  },
  accordionSummary: {
    backgroundColor: "#1A042D",
    color: "#fff",
    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
    "& .Mui-expanded": {
      backgroundColor: "transparent",
    },
  },
  accordionDetails: {
    padding: theme.spacing(2),
  },
}));

const FAQ = () => {
  const classes = useStyles();

  return (
    <div className={classes.faqContainer}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqData.map((faqItem, index) => (
        <Accordion key={index} className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls={`faq-panel-${index}`}
            id={`faq-panel-header-${index}`}
            className={classes.accordionSummary}>
            <Typography variant="h6">{faqItem.question}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography variant="body1">{faqItem.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
