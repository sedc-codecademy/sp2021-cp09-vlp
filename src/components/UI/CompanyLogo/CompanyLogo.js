import { Link } from "react-router-dom";

import classes from "./ComapnyLogo.module.scss";

const CompanyLogo = () => {
  return (
    <Link to="/">
      <div className={classes.logoContainer}>
        <div className={classes.logoImage}>
          <img src="/img/sedc-logo.webp" alt="SEDC Logo" />
        </div>
        <p className={classes.logoText}>
          SEAVUS EDUCATION and DEVELOPMENT CENTER
        </p>
      </div>
    </Link>
  );
};

export default CompanyLogo;
