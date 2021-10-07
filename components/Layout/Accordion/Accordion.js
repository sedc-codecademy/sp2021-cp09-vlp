import React, { useState } from "react";
import classes from "./Accordion.module.scss";
import Modal from "../../UI/Modal/Modal"

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { title, content,  academy, isModalOpen, toggleModal } = props;
  console.log('Rendered accordion')

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
            <button type="button" className={classes.read_more} onClick={()=>toggleModal(isModalOpen)}>
              Read More
            </button>
          </div>
        )}
      </div>
      {isModalOpen && <Modal toggleModal={toggleModal} isModalOpen={isModalOpen}/>} 
    </React.Fragment>
  );
};

export default Accordion;
