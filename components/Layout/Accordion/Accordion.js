import React, { useState } from "react";
import classes from "./Accordion.module.scss";
import Modal from "../../UI/Modal/Modal";

const Accordion = props => {
  const [isActive, setIsActive] = useState(false);
  const { title, content, academy, isModalOpen, toggleModal } = props;

  console.log("accordion rerendered");

  return (
    <React.Fragment>
      <div className={classes.accordion_title}>
        <div className={classes.accordion_title_text}>{title}</div>
        <span
          type="button"
          onClick={() => setIsActive(!isActive)}
          className={classes.accordion_arrow}
        >
          {isActive ? (
            <i className="fas fa-arrow-up"></i>
          ) : (
            <i className="fas fa-arrow-down"></i>
          )}
        </span>
      </div>
      <br />
      <div className={classes.accordion_content_container}>
        {isActive && (
          <div className={classes.accordion_content}>
            <div className={classes.accordion_content_text}>{content} </div>
            <button
              type="button"
              className={classes.read_more}
              onClick={() => toggleModal(isModalOpen)}
            >
              Read More
            </button>
          </div>
        )}
      </div>
      {isModalOpen && (
        <Modal toggleModal={toggleModal} isModalOpen={isModalOpen} />
      )}
    </React.Fragment>
  );
};

export default Accordion;
