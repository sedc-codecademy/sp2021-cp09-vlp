import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import axios from "axios";

import Link from "next/link";
import AcademiesLayout from "../../components/AcademiesLayout/AcademiesLayout";
import classes from "./studentProgramId.module.scss";

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
    <div>
      <Head>
        <script
          src="https://kit.fontawesome.com/d32ad62e17.js"
          crossorigin="anonymous"
        ></script>
        <title>SEDC - {selectedAcademy.title}</title>
      </Head>
      <main className={classes.academiesMain}>
        <Link href={`/`}>
          <div className={classes.backDiv}>
            <i className="fas fa-chevron-left"></i>
            <p className={classes.backToHome}>Back to home</p>
          </div>
        </Link>

        <div className={classes.academyTitleDiv}>
          <img
            className={classes.screenIcon}
            src={`/img/${academyData.id}.png`}
            alt=""
          />
          <h1 className={classes.title}>{academyData.title}</h1>
        </div>

        <div className={classes.buttonsDiv}>
          {academyData.study_programs.map(program => (
            <button
              className={classes.academyBtn}
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
        {/* <button onClick={toggleModal} type="button"> Read More </button> */}
        {/* {isModalOpen && <Modal onRequestClose={toggleModal} />}   */}
      </main>
    </div>
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
