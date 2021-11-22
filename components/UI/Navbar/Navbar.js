import React from "react";
import classes from "./Navbar.module.scss";
import NavItem from "./NavItem";
import linkData from "./link-data";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [router.asPath]);

  return (
    <React.Fragment>
      <div
        className={classes.navbar__burgerMenu}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <nav
        className={`${classes.navbar} ${
          isDrawerOpen ? classes.openDrawer : ""
        }`}
      >
        <ul className={classes.navbar__nav}>
          <NavItem item="about us" linkData={linkData.aboutUsItems} />
          <NavItem
            item="academies"
            nextLinks={true}
            linkData={linkData.academyItems}
          />
          <NavItem item="courses" linkData={linkData.coursesItems} />
          <NavItem item="accelerator" linkData={linkData.acceleratorItems} />
          <NavItem item="testing" linkData={linkData.testingItems} />
          <li>
            <a
              href="https://www.sedc.mk/facilty-use/"
              className={classes.navbar__item}
            >
              facility use
            </a>
          </li>
          <li>
            <a
              href="https://www.sedc.mk/contact-us/"
              className={classes.navbar__item}
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
