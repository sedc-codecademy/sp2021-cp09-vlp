import { Fragment } from "react";
import CompanyLogo from "../UI/CompanyLogo/CompanyLogo";
import Navbar from "../UI/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = props => {
  return (
    <Fragment>
      <header>
        <CompanyLogo />
        <Navbar />
      </header>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
