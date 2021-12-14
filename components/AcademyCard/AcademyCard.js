import Link from "next/link";
import classes from "./AcademyCard.module.scss";

const AcademyCard = props => {
  const { academy } = props;

  console.log(academy);

  if (academy.unfinished) {
    return (
      <div className={classes.academyCard}>
        <div className={classes.unfinishedOverlay}>
          <span>UNDER CONSTRUCTION</span>
        </div>
        <img
          className={classes.academyIcon}
          alt={academy.id}
          src={`/img/cards-icons/color/${academy.id}.png`}
        />
        <span>{academy.title.replace("Academy For ", "")}</span>
      </div>
    );
  }

  return (
    <Link
      href={`/${academy.id}/${academy.study_programs[0].id}`}
      key={academy.id}
    >
      <div className={classes.academyCard}>
        <img
          className={classes.academyIcon}
          alt={academy.id}
          src={`/img/cards-icons/color/${academy.id}.png`}
        />
        <span>{academy.title.replace("Academy For ", "")}</span>
      </div>
    </Link>
  );
};
export default AcademyCard;
