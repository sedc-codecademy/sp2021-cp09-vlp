import Head from "next/head";

import AcademyCard from "../components/AcademyCard/AcademyCard";

import classes from "../styles/HomePage.module.scss";

import axios from "axios";
import { Fragment } from "react";
import { webDevDataMapper } from "../util/webDevDataMapper";

export default function HomePage(props) {
  const seavusInfo = props.seavusInfo;
  const academies = props.data.academies;

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
              <h1>{seavusInfo.academy_main_text}</h1>
              <h2>{seavusInfo.academy_sub_text}</h2>
            </div>
          </div>
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.academyRates}>
            <div className={classes.academyRate}>
              <h3>{seavusInfo.partner_companies_count}</h3>
              <p>{seavusInfo.partner_companies_count_description}</p>
            </div>
            <div className={classes.academyRate}>
              <h3>{seavusInfo.student_employment_rate}</h3>
              <p>{seavusInfo.student_employment_rate_description}</p>
            </div>
            <div className={classes.academyRate}>
              <h3>{seavusInfo.student_projects_count}</h3>
              <p>{seavusInfo.student_projects_count_description}</p>
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
  const academiesResponse = await axios.get(
    "https://vlp-data.herokuapp.com/academies"
  );
  const frontPageInfoResponse = await axios.get(
    "https://dev.sedc.mk/wp-json/wp/v2/pages/649"
  );

  const webDevResponse = await axios.get(
    "https://dev.sedc.mk/wp-json/wp/v2/pages/4167"
  );

  const webDevData = webDevResponse?.data;

  const mappedData = webDevDataMapper(webDevData.ACF);

  return {
    props: {
      seavusInfo: frontPageInfoResponse.data.ACF,
      data: { academies: [{ ...mappedData }] },
    },
  };
}
