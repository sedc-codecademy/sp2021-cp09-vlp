import React, { useEffect, useState, Fragment } from "react";
import { fetchService } from "../../services/academy-fetch.service";
import { SUBFOLDER_PATH } from "../../components/UI/Navbar/link-data";

import { Link } from "react-router-dom";
import AcademiesLayout from "../../components/AcademiesLayout/AcademiesLayout";
import BackToTop from "../../components/UI/BackToTop/BackToTop";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./AcademyPage.module.scss";
import { useParams } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";

const AcademyPage = props => {
  const [academyData, setAcademyData] = useState(undefined);
  const params = useParams();

  const [isModalOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    fetchService("web-dev").then(value => {
      setAcademyData(value);
    });
  }, [params, setAcademyData]);

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  return (
    <Fragment>
      {academyData ? (
        <div className={classes.academiesMain}>
          <Link to={`/${SUBFOLDER_PATH}`}>
            <div className={classes.backDiv}>
              <p className={classes.backToHome}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
                Back to home
              </p>
            </div>
          </Link>
          <div className={classes.academyTitleDiv}>
            <h1 className={classes.title}>{academyData.title}</h1>
          </div>
          <div className={classes.buttonsDiv}>
            {academyData.study_programs.map(program => (
              <button
                className={classes.academyBtn}
                style={{
                  borderBottom:
                    program.id === academyData.id ? "4px solid #0079c8" : "",
                  backgroundColor:
                    program.id === academyData.id ? "#f5f5f6" : "",
                }}
                key={program.id}
                onClick={e => {}}
              >
                {program.title}
              </button>
            ))}
          </div>

          <AcademiesLayout
            academy={academyData.study_programs[0]}
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
            updateModalData={setModalData}
          />

          {isModalOpen && (
            <Modal
              toggleModal={toggleModal}
              setModalIsOpen={setModalIsOpen}
              modalData={modalData}
            />
          )}
          <BackToTop />
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default AcademyPage;
