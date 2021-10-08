import { Fragment } from "react";

const Layout = props => {
  return (
    <Fragment>
      {/* <header>
        <h3>HEADER PLACEHOLDER</h3>
      </header> */}
      <main>{props.children}</main>
      {/* <footer>
        <h3>FOOTER PLACEHOLDER</h3>
      </footer> */}
    </Fragment>
  );
};

export default Layout;
