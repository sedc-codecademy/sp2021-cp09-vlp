import Link from "next/link";
import classes from "./AcademyCard.module.scss";

const AcademyCard = props => {
  const { academy } = props;

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
