import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import axios from "axios";

import Link from "next/link";
import AcademiesLayout from "../../components/AcademiesLayout/AcademiesLayout";
import classes from './studentProgramId.module.scss';

const AcademyPage = props => {
  const router = useRouter();

  const { academyData } = props;
  const [selectedAcademy, setSelectedAcademy] = useState({});

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
        <title>SEDC- {selectedAcademy.title}</title>
      </Head>

      <main  className={classes.academiesMain} >

        <Link href={`/`}>
          <div className={classes.backDiv}>
            <img className={classes.arrow} src="/images/Arrow.png" alt="" />
            <p className={classes.backToHome}>Back to home</p>
          </div>
        </Link>
      
        <img className={classes.screenIcon} src="/images/Rectangle18.png" alt="" />
        <h1 className={classes.title}>{academyData.title}</h1>

        
        <div className={classes.buttonsDiv}>
          {academyData.study_programs.map(program => (
            <button 
              className={classes.academyBtn}
              key={program.id}
              onClick={e => {
                router.push(`/${router.query.academyId}/${program.id}`, undefined, {
                  shallow: true,
                });
              }}
            >
              {program.title}
            </button>
          ))}
        </div>

        <AcademiesLayout academy = {selectedAcademy} />
        
      </main>
    </div>
  );
};

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

export default AcademyPage;
