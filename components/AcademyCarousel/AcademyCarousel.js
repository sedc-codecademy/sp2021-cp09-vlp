import classes from "./AcademyCarousel.module.scss";
import { useState, useEffect } from "react";

import Image from "next/image";
import CarouselList from "./CarouselList/CarouselList";

const AcademyCarousel = ({ academyData }) => {
  const [counter, setCounter] = useState(0);

  const dataList = [
    "job_opportunities",
    "trainers",
    "lab_activities",
    "target_audience",
    "prerequisites",
  ].filter(element => academyData[element]);

  const controlsJsx = dataList.map((element, i) => {
    return (
      <button
        key={i}
        onClick={e => setCounter(-i)}
        style={{
          background: counter === -i && "rgba(255, 255, 255, 1)",
          borderBottom: counter === -i && "3px solid #004e97",
        }}
      >
        {element
          .split("_")
          .map(el => el[0].toUpperCase() + el.slice(1))
          .join(" ")}
      </button>
    );
  });

  useEffect(() => {
    if (dataList.length === 1) return;
    const interval = setInterval(() => {
      if (counter === -dataList.length + 1) {
        setCounter(0);
        return;
      }

      setCounter(counter - 1);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  const slideJsx = dataList
    .map(item => {
      let data;
      if (item === "trainers") {
        data = (
          <>
            <h2>Trainers</h2>
            <p>{academyData.trainers}</p>
          </>
        );
      } else if (item === "job_opportunities") {
        data = (
          <CarouselList
            list={{
              list_title: "Job Opportunities",
              list_data: academyData.job_opportunities.split(","),
            }}
          />
        );
      } else {
        data = <CarouselList list={academyData[item]} />;
      }
      return (
        <div
          key={item}
          className={classes.carouselSlide}
          style={{ transform: `translateX(${counter}00%)` }}
        >
          <div className={classes.imageContainer}>
            <Image
              src={`/img/carousel/${item}.jpg`}
              alt={item}
              height="550px"
              width="888px"
              layout="responsive"
            />
          </div>

          <div className={classes.dataContainer}>{data}</div>
        </div>
      );
    })
    .filter(el => el);

  return (
    <div className={classes.carouselMain}>
      <div className={classes.carouselContainer}>{slideJsx}</div>
      <div className={classes.carouselControls}>{controlsJsx}</div>
    </div>
  );
};

export default AcademyCarousel;
