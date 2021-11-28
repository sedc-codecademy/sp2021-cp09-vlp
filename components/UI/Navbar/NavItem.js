import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import classes from "./Navbar.module.scss";
import useClickOutside from "./Hooks/useClickOutside";
import { useRouter } from "next/router";

function NavItem(props) {
  const [open, setOpen] = useState(false);
  let elRef = useClickOutside(() => setOpen(false));

  const router = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [router.asPath]);

  return (
    <li ref={elRef} className={classes.listedItemContainer}>
      <span className={classes.navbar__item} onClick={() => setOpen(!open)}>
        {props.item}
        {props.item === "facility use" || props.item === "contact" ? (
          ""
        ) : (
          <img
            src="/img/caret-down-fill.svg"
            alt="open submenu down arrow"
            className={classes.navbar__arrow}
          />
        )}
      </span>
      {open && (
        <Dropdown subitem={props.linkData} nextLinks={props.nextLinks} />
      )}
    </li>
  );
}

export default NavItem;
