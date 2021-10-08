import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./AccordionElements";
import classes from "./Accordion.module.scss";

const AccordionApp = props => {
  const { isModalOpen, toggleModal } = props;
  return (
    <div className={classes.app_ready}>
      <div className={classes.heading}>Study Program</div>
      <div className={classes.accordion_data}>
        {accordionData.map(({ title, content }, index) => (
          <Accordion
            key={index}
            title={title}
            content={content}
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionApp;
