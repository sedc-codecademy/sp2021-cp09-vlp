import { useState } from "react";

import classes from "./CompetenciesBox.module.scss";
const CompetenciesBox = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h2 className={classes.competenciesHeading}>Competencies</h2>
      <div
        className={`${classes.dataBox} ${
          isExpanded ? classes.open : classes.close
        }`}
      >
        {children}
      </div>
      <div className={classes.btnDiv}>
        <button
          className={classes.showMoreBtn}
          type="button"
          onClick={e => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Hide More" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default CompetenciesBox;
