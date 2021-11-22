import { useEffect, useState } from "react";
import classes from "./BackToTop.module.scss";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <span
      className={classes.backToTop}
      onClick={toTop}
      style={{ display: !isVisible ? "none" : "flex" }}
    >
      <img src="/img/chevron-up.svg" />
      <p>TOP</p>
    </span>
  );
};

export default BackToTop;
