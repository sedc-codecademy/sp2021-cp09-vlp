import Head from "next/head";

import AcademyCard from "../components/AcademyCard/AcademyCard";

import classes from "../styles/HomePage.module.scss";

import axios from "axios";
import { Fragment } from "react";

export default function HomePage(props) {
  const { academies } = props.data;

  return (
    <Fragment>
      <Head>
        <link rel="icon" type="image/png" href="/img/sedc-logo.png" />
        <title>SEDC - Academies</title>
      </Head>
      <div>
        <div className={classes.whiteBack}>
          <div className={classes.heroDiv}>
            <div>
              <h1>10 Years Changing Lives</h1>
              <h2>
                Master the most requested skills with the help of real experts
              </h2>
            </div>
            {/* <img src="./img/heroimg.jpg" alt="heroimg" /> */}
          </div>
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.academyRates}>
            <div className={classes.academyRate}>
              <h3>75%</h3>
              <p>students employment rate</p>
            </div>
            <div className={classes.academyRate}>
              <h3>30+</h3>
              <p>partner companies involved in the program</p>
            </div>
            <div className={classes.academyRate}>
              <h3>50+</h3>
              <p>student's project implementation in the last 5 years</p>
            </div>
          </div>
          <h3 className={classes.availableAcademiesTitle}>
            Available academies
          </h3>
          <div className={classes.academyCardContainer}>
            {academies.map(academy => (
              <AcademyCard academy={academy} key={academy.id} />
            ))}
          </div>
          <div className={classes.copyrightTextContainer}></div>
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
