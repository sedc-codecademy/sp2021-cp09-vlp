import React, { useState, useEffect } from "react";
import classes from "../Modal/Modal.module.scss";

const Modal = (props) => {
  const { toggleModal, isModalOpen, setModalIsOpen } = props;

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
        onClick={(event) =>
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
            <h2 className={classes.courseMainTitle}>Title of Subject </h2>
            <h3 className={classes.courseHeader}>Course Summary</h3>
            <p className={classes.subjectInfo}>
              Elit minim veniam ea qui ea dolor do sunt.Veniam dolore magnaElit
              minim veniam ea qui ea dolor do sunt.Veniam dolore magnaElit minim
              veniam ea qui ea dolor do sunt.Veniam dolore magnaElit minim
              veniam ea qui ea dolor do sunt.Veniam dolore magnaElit minim
              veniam ea qui ea dolor do sunt.Veniam dolore magnaElit minim
              veniam ea qui ea dolor do sunt.Veniam dolore magna dolore deserunt
              labore magna.Tempor ullamco culpa irure in sit voluptate excepteur
              aute consectetur exercitation.Et reprehenderit ex ea aliquip ipsum
              eu incididunt fugiat enim elit exercitation ex.
            </p>
            <h3 className={classes.courseHeader}> Course Progression</h3>
          </div>

          <div className={classes.infoContainer}>
            <div className={classes.infoBox}>
              <div>Example </div>
            </div>
            <div className={classes.infoBox}>
              <div>Example </div>
            </div>
            <div className={classes.infoBox}>
              <div>Example</div>
            </div>
            <div className={classes.infoBox}>
              <div>Example </div>
            </div>
            <div className={classes.infoBox}>
              <div>Example </div>
            </div>
            <div className={classes.infoBox}>
              <div>Example </div>
            </div>
          </div>

          <div className={classes.linkSection}>
            <h3 className={classes.linkHeader}>Further Reading</h3>
            <a
              className={classes.link}
              href="https://en.wikipedia.org/wiki/HTML"
            >
              HTML introduction
            </a>
            <a
              className={classes.link}
              href="https://en.wikipedia.org/wiki/CSS"
            >
              CSS introduction
            </a>
            <a
              className={classes.link}
              href="https://en.wikipedia.org/wiki/JavaScript"
            >
              JavaScript introduction
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
