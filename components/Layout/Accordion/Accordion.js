import React, { useState } from "react";
import classes from "./Accordion.module.scss";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <div className={classes.accordion_title}>
        <div className={classes.accordion_title_text}>{title}</div>
        <button
          type="button"
          onClick={() => setIsActive(!isActive)}
          className={classes.accordion_arrow}
        >
          {isActive ? "↑" : "↓"}
        </button>
      </div>
      <br />
      <div>
        {isActive && (
          <div className={classes.accordion_content}>
            <div className={classes.accordion_content_text}>{content} </div>
            <button type="button" className={classes.read_more}>
              Read More
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Accordion;
