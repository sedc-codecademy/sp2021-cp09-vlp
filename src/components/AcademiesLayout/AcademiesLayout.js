import { Fragment } from "react";
import AcademyCarousel from "../AcademyCarousel/AcademyCarousel";
import CompetenciesBox from "../CompetenciesBox/CompetenciesBox";
import SubjectCard from "../SubjectCard/SubjectCard";
import ExpansionPanel from "../UI/ExpansionPanel/ExpansionPanel";
import classes from "./AcademiesLayout.module.scss";

const AcademiesLayout = props => {
  const { academy, toggleModal, updateModalData } = props;

  return (
    <Fragment>
      {!academy.title ? (
        <div>Loading...</div>
      ) : (
        <div className={classes.academyContainer}>
          <h2 className={classes.title}>{academy.title}</h2>

          <div className={classes.iconsContainer}>
            <div className={classes.iconBox}>
              <img
                className={classes.icon}
                src="/img/money-icon.svg"
                alt="wallet icon"
              />
              <span className={classes.iconSpan}>{academy.price} &euro;</span>
            </div>

            <div className={classes.iconBox}>
              <img
                className={classes.icon}
                src="/img/calendar-icon.svg"
                alt="calendar icon"
              />
              <span className={classes.iconSpan}>
                {academy.timeline?.duration}
              </span>
            </div>

            <div className={classes.iconBox}>
              <img
                className={classes.icon}
                src="/img/time-icon.svg"
                alt="clock icon"
              />
              <span className={classes.iconSpan}>
                {academy.timeline?.classes}
              </span>
            </div>
          </div>

          <div
            className={classes.courseInfoDiv}
            style={{ display: academy.id === "web-dev" && "block" }}
          >
            <div
              className={classes.aboutCourseDiv}
              style={{ width: academy.id === "web-dev" && "100%" }}
            >
              <p>{academy.overview}</p>
            </div>

            <div
              className={classes.timelineContainer}
              style={{ minWidth: academy.id === "web-dev" && "100%" }}
            >
              <h3>Timeline</h3>

              {academy.timeline?.semesters.map((timeline, index) => {
                return (
                  <div key={index}>
                    <p>{timeline.list_title}:</p>
                    <ul>
                      {timeline.list_data.map((listItem, i) => (
                        <li key={i}>{listItem}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
              <p>{academy.timeline?.lectures}</p>
            </div>
          </div>

          <AcademyCarousel academyData={academy} />

          <ExpansionPanel title="Study Program" summary="">
            <div className={classes.subjectCardContainer}>
              {academy.courses.map((course, index) => (
                <SubjectCard
                  key={index}
                  cardData={course}
                  updateModalData={updateModalData}
                  modalHandler={toggleModal}
                />
              ))}
            </div>
          </ExpansionPanel>

          <CompetenciesBox>
            <ul className={classes.competenciesList}>
              {academy.competencies.list_data.map((data, i) => (
                <li key={i}>
                  <span className={classes.checkSign}></span>
                  <div key={i} className={classes.competenciesListItem}>
                    {data}
                  </div>
                </li>
              ))}
            </ul>
          </CompetenciesBox>

          <br />

          <div className={classes.registrationContainer}>
            <div className={classes.termsDiv}>
              <h2 className={classes.h2Tag}>
                Terms and documents for registration
              </h2>
              <p className={classes.pTag}>{academy.terms_and_documents}</p>
              <h2 className={classes.h2Tag}>Scholarship opportunities</h2>
              {academy.scholarship_opportunities.map(el => (
                <p key={el}>{el}</p>
              ))}
            </div>
            <div className={classes.tableDiv}>
              <h2 className={classes.h2Tag}>
                Discounts for early registration
              </h2>
              <table className={classes.priceTable}>
                <thead>
                  <tr className={classes.tableRow}>
                    <th className={classes.tableHeader}>Type of Payment</th>
                    <th className={classes.tableHeader}>April 1st</th>
                    <th className={classes.tableHeader}>May 15th</th>
                    <th className={classes.tableHeader}>July 15th</th>
                    <th className={classes.tableHeader}>Sept 15th</th>
                  </tr>
                </thead>
                <tbody>
                  {academy.discount_data.map((el, index) => (
                    <tr key={index} className={classes.tableRow}>
                      <td className={classes.tableCell}>
                        {el.type_of_payments}
                      </td>
                      <td className={classes.tableCell}>{el.april_1st}</td>
                      <td className={classes.tableCell}>{el.juli_15th}</td>
                      <td className={classes.tableCell}>{el.may_15}</td>
                      <td className={classes.tableCell}>{el.sept_15th}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <ul className={classes.programContainer}>
            {academy.program_package.map((el, index) => (
              <li key={index}>
                {" "}
                <span className={classes.checkSign}></span>
                <p>{el}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default AcademiesLayout;
