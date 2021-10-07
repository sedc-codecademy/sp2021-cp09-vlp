import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./AccordionElements";
import classes from "./Accordion.module.scss";

class AccordionApp extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className={classes.app_ready}>
        <div className={classes.heading}>Study Program</div>
        <div className={classes.accordion_data}>
          {accordionData.map(({ title, content }, index) => (
            <Accordion key={index} title={title} content={content} />
          ))}
        </div>
      </div>
    );
  }
}

export default AccordionApp;
