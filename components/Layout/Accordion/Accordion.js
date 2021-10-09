import React, { useState } from "react";
import classes from "./Accordion.module.scss";
import Modal from "../../UI/Modal/Modal";

const Accordion = props => {
  const [isActive, setIsActive] = useState(false);
  const { title, content, academy, isModalOpen, toggleModal } = props;

  return (
    <React.Fragment>
      <div
        className={classes.accordion_title}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={classes.accordion_title_text}>{title}</div>
        <span type="button" className={classes.accordion_arrow}>
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
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
