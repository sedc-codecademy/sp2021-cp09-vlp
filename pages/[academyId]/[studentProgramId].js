import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import Modal from "../../components/UI/Modal/Modal"

import axios from "axios";

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
      <h1>{academyData.title}</h1>

      {academyData.study_programs.map(program => (
        <button
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
      <h2>{selectedAcademy.title}</h2>
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
