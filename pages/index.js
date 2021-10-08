import Head from "next/head";
import Link from "next/link";

import AccordionApp from "../components/Layout/Accordion/AccordionApp";
import classes from "../styles/HomePage.module.scss";

import axios from "axios";
import { Fragment } from "react";

export default function HomePage(props) {
  const { academies } = props.data;
  console.log(academies);

  return (
    <Fragment>
      <Head>
        <title>SEDC - Academies</title>
      </Head>
      <div>
        <div className={classes.heroDiv}>
          <div>
            <h1>10 Years Changing Lives</h1>
            <h4>
              Master the most requested skills with the help of real experts
            </h4>
          </div>
          <img src="./img/heroimg.png" alt="heroimg" />
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.academyRates}>
            <div className={classes.academyRate}>
              <h1>75%</h1>
              <h4>students employment rate</h4>
            </div>
            <div className={classes.academyRate}>
              <h1>30+</h1>
              <h4>partner companies involved in the program</h4>
            </div>
            <div className={classes.academyRate}>
              <h1>50+</h1>
              <h4>student's project implementation in the last 5 years</h4>
            </div>
          </div>
          <h1 className={classes.availableAcademiesTitle}>
            Available academies
          </h1>
          <div className={classes.academyCardContainer}>
            {academies.map(academy => (
              <Link
                href={`/${academy.id}/${academy.study_programs[0].id}`}
                key={academy.id}
              >
                <div className={classes.academyCard}>
                  <img
                    className={classes.academyLogo}
                    src={`/img/${academy.id}.png`}
                  ></img>
                  <a>{academy.title.replace("Academy For ", "")}</a>
                </div>
              </Link>
            ))}
          </div>
          <div className={classes.copyrightTextContainer}>
            <small>
              &copy; 2021. All rights reserved. Seavus Education and Development
              Center
            </small>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const response = await axios.get("https://vlp-data.herokuapp.com/academies");

  return {
    props: {
      data: response.data,
    },
  };
}
