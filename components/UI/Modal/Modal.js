import React, { useState, useEffect } from "react";
import classes from "../Modal/Modal.module.scss";

const Modal = props => {
  const { toggleModal, isModalOpen, setModalIsOpen, modalData } = props;

  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27 || event.keyCode === 8) {
        toggleModal();
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        className={classes.modalBackground}
        onClick={event =>
          event.target.classList[0].includes("modalBackground") &&
          setModalIsOpen(false)
        }
      >
        <div className={classes.modal}>
          <button
            className={classes.closeBtn}
            type="button"
            onClick={() => toggleModal(!isModalOpen)}
          >
            ✖
          </button>

          <div className={classes.infoSection}>
            <h2 className={classes.courseMainTitle}>
              {modalData.course_title}
            </h2>
            <h3 className={classes.courseHeader}>Course Summary</h3>
            <p className={classes.subjectInfo}>{modalData.course_summary}</p>
            <h3 className={classes.courseHeader}> Course Progression</h3>
          </div>

          <div className={classes.infoContainer}>
            {modalData.course_progression.map((progressionData, index) => {
              return (
                <div className={classes.infoBox} key={index}>
                  <div>{progressionData}</div>
                </div>
              );
            })}
          </div>

          <div className={classes.linkSection}>
            <h3 className={classes.linkHeader}>Further Reading</h3>
            {modalData.further_reading.map((linkData, index) => {
              return (
                <a
                  className={classes.link}
                  href={linkData.further_reading_url}
                  key={index}
                >
                  {linkData.further_reading_title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
