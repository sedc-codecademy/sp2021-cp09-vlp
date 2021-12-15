import React, { Fragment, useEffect, useState } from "react";
import AcademyCard from "../../components/AcademyCard/AcademyCard";

import axios from "axios";
import classes from "./HomePage.module.scss";
import Loader from "../../components/UI/Loader/Loader";

const academyCardsDataset = [
  {
    id: "academy-for-programming",
    title: "Academy For Programming",
    start_study_program_id: "web-dev",
  },
  { id: "academy-for-design", title: "Academy For Design", unfinished: true },
  {
    id: "academy-for-computer-networks",
    title: "Academy For Computer Networks",
    unfinished: true,
  },
  {
    id: "academy-for-software-testing",
    title: "Academy For Software Testing",
    unfinished: true,
  },
  {
    id: "academy-for-data-science",
    title: "Academy For Data Science",
    unfinished: true,
  },
  {
    id: "academy-for-digital-marketing",
    title: "Academy For Digital Marketing",
    unfinished: true,
  },
];

function HomePage(props) {
  const [seavusInfo, setSeavusInfo] = useState(undefined);

  useEffect(() => {
    axios.get("https://dev.sedc.mk/wp-json/wp/v2/pages/649").then(response => {
      setSeavusInfo(response.data.ACF);
    });
  }, []);

  return seavusInfo ? (
    <Fragment>
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
            {academyCardsDataset.map(academy => (
              <AcademyCard academy={academy} key={academy.id} />
            ))}
          </div>
          <div className={classes.copyrightTextContainer}></div>
        </div>
      </div>
    </Fragment>
  ) : (
    <Loader />
  );
}

export default HomePage;
