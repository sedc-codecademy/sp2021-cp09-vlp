import { useState } from "react";
import classes from "./ExpansionPanel.module.scss";

const ExpansionPanel = ({ title, summary, children, startingHeight }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={classes.panelHeading} onClick={e => setIsOpen(!isOpen)}>
        <h2>
          {title} {summary}
        </h2>
        <div
          className={`${classes.chevron} ${
            isOpen ? classes.chevronUp : classes.chevronDown
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-chevron-down"
            className={`bi bi-chevron-down ${
              isOpen ? classes.chevronUp : classes.chevronDown
            }`}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      <div
        // style={{ maxHeight: isOpen ? "5000px" : startingHeight || "0px" }}
        className={`${classes.panelData} ${
          isOpen ? classes.open : classes.close
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default ExpansionPanel;
