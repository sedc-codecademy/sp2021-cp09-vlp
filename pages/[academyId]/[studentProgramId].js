import { useState, useEffect, Fragment } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import axios from "axios";

import Link from "next/link";
import AcademiesLayout from "../../components/AcademiesLayout/AcademiesLayout";

import BackToTop from "../../components/UI/BackToTop/BackToTop";
import classes from "../../styles/studentProgramId.module.scss";
import Modal from "../../components/UI/Modal/Modal";

const AcademyPage = props => {
  const router = useRouter();

  const { academyData } = props;
  const [selectedAcademy, setSelectedAcademy] = useState({});
  const [isModalOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  useEffect(() => {
    setSelectedAcademy(
      academyData.study_programs.find(
        el => el.id === router.query.studentProgramId
      )
    );
  }, [router.asPath]);

  return (
    <Fragment>
      <Head>
        <link rel="icon" type="image/png" href="/img/sedc-logo.png" />
        <title>SEDC - {selectedAcademy.title}</title>
      </Head>
      <div className={classes.academiesMain}>
        <Link href={`/`}>
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
                  program.id === selectedAcademy.id ? "4px solid #0079c8" : "",
                backgroundColor:
                  program.id === selectedAcademy.id ? "#f5f5f6" : "",
              }}
              key={program.id}
              onClick={e => {
                router.push(
                  `/${router.query.academyId}/${program.id}`,
                  undefined,
                  {
                    shallow: true,
                  }
                );
              }}
            >
              {program.title}
            </button>
          ))}
        </div>

        <AcademiesLayout
          academy={selectedAcademy}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
        />

        {isModalOpen && (
          <Modal toggleModal={toggleModal} setModalIsOpen={setModalIsOpen} />
        )}
        <BackToTop />
      </div>
    </Fragment>
  );
};

// STATIC DATA FETCHING AND STATIC PATH GENERATION - DON'T EDIT
export async function getStaticPaths() {
  const response = await axios.get("https://vlp-data.herokuapp.com/academies");

  const { academies } = response.data;

  const paths = academies
    .map(academy => {
      const academyPaths = academy.study_programs.map(program => ({
        params: {
          academyId: academy.id,
          studentProgramId: program.id,
        },
      }));

      return academyPaths;
    })
    .flat();

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const response = await axios.get("https://vlp-data.herokuapp.com/academies");

  const { academies } = response.data;

  const academyData = academies.filter(
    academy => academy.id === context.params.academyId
  )[0];

  return {
    props: {
      academyData,
    },
  };
}
// STATIC DATA FETCHING AND STATIC PATH GENERATION - DON'T EDIT

export default AcademyPage;
