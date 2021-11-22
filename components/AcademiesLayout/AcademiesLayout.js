import { Fragment, useEffect } from "react";
import AcademyCarousel from "../AcademyCarousel/AcademyCarousel";
import CompetenciesBox from "../CompetenciesBox/CompetenciesBox";
import SubjectCard from "../SubjectCard/SubjectCard";
import ExpansionPanel from "../UI/ExpansionPanel/ExpansionPanel";
import classes from "./AcademiesLayout.module.scss";

const placeholderAcademyData = [
  {
    title: "Basic Programming Principles and Methodologies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    learningPath: ["Test", "Test02", "Tes03", "Test04", "Test05", "Test06"],
    furtherReadingLinks: [
      "http://www.google.com",
      "https://developer.mozilla.org/en-US/",
      "https://en.wikipedia.org/wiki/HTML",
    ],
  },
  {
    title: "Basic Web Development (HTML5/CSS3)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    learningPath: ["Test", "Test02", "Tes03", "Test04", "Test05", "Test06"],
    furtherReadingLinks: [
      "http://www.google.com",
      "https://developer.mozilla.org/en-US/",
      "https://en.wikipedia.org/wiki/JavaScript",
    ],
  },
  { title: "Basic JavaScript Development" },
  { title: "Advanced JavaScript Development" },
  { title: "OOP Programming with C#" },
  { title: "Advanced C# development" },
  { title: "Relational database development & design" },
  { title: "Developing ASP.NET Web Applications" },
  { title: "RESTful Web Services Development" },
  { title: "Advanced Data-Driven Applications Development" },
  { title: "Software debugging and testing" },
  { title: "Developing Cloud-ready Applications" },
  { title: "C# Server Development" },
  { title: "AngularJS with TypeScript" },
  { title: "MEAN/MERN Development" },
];

const AcademiesLayout = props => {
  const { academy, isModalOpen, toggleModal } = props;

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

              {academy.timeline?.semesters.map(timeline => {
                return (
                  <div key={timeline.list_title}>
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

          <ExpansionPanel
            title="Study Program"
            summary=""
            // startingHeight="526px"
          >
            <div className={classes.subjectCardContainer}>
              {placeholderAcademyData.map(subject => (
                <SubjectCard
                  key={subject.title}
                  cardData={subject}
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
              <p className={classes.pTag}>
                Anyone who has completed at least High school can enroll at the
                Academies.
                <br />
                For enrollment at the Academy the prospective students should
                fill Application for registration and sign a Contract on
                tuition.
              </p>
              <h2 className={classes.h2Tag}>Scholarship opportunities</h2>
              <p>Challenge Day(mid of June)</p>
              <p>6 full/ 10 half Scholarships (based on a competition)</p>
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
                  <tr className={classes.tableRow}>
                    <td className={classes.tableCell}>
                      Discount for payment up to "x" installments
                    </td>
                    <td className={classes.tableCell}>400&euro;</td>
                    <td className={classes.tableCell}>250&euro;</td>
                    <td className={classes.tableCell}>100&euro;</td>
                    <td className={classes.tableCell}>none</td>
                  </tr>
                  <tr className={classes.tableRow}>
                    <td className={classes.tableCell}>Cash Payment</td>
                    <td className={classes.tableCell}>500&euro;</td>
                    <td className={classes.tableCell}>350&euro;</td>
                    <td className={classes.tableCell}>200&euro;</td>
                    <td className={classes.tableCell}>200&euro;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={classes.programContainer}>
            <h2 className={classes.h2Tag}>Program package includes</h2>
            <span className={classes.checkSign}></span>
            <p>Learning materials</p>
            <span className={classes.checkSign}></span>
            <p>Career Counseling & Mentorship</p>
            <span className={classes.checkSign}></span>
            <p>Art Materials included (for Design Academy)</p>
            <span className={classes.checkSign}></span>
            <p>Certificates</p>
            <span className={classes.checkSign}></span>
            <p>
              Loyalty Card - Loyalty Program with discounts and benefits for
              students and family members
            </p>
            <span className={classes.checkSign}></span>
            <p>Alumni Community Membership</p>
            <span className={classes.checkSign}></span>
            <p>
              Access to conference and events/Competitions/Match making events
              with Industry
            </p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AcademiesLayout;
