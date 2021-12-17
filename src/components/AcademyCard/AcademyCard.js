import { Link } from "react-router-dom";
import classes from "./AcademyCard.module.scss";
import { SUBFOLDER_PATH } from "../UI/Navbar/link-data";

const AcademyCard = props => {
  const { academy } = props;

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
      to={`${academy.id}/${academy.start_study_program_id}`}
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
