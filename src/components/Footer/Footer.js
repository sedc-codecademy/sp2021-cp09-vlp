import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footer__mainContainer}>
          <div className={classes.footer__main}>
            {/* Column 1 */}
            <div className={classes.col}>
              <h3>
                <a href="https://www.sedc.mk/about-us/">ABOUT US</a>
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.sedc.mk/about-us/the-clients-of-seavus-education-center/">
                    The Clients of SEDC
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/about-us/the-team-of-seavus-education-center/">
                    The team of SEDC
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/category/about-us/gallery/">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/category/about-us/news/">
                    News & Events
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className={classes.col}>
              <h3>
                <a href="http://localhost:3000/"> ACADEMIES</a>
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.sedc.mk/academy/admission/">
                    Tuition fees & Payment
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/academy/academy-for-programing/">
                    Academy for Programming
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/academy/academy-for-computer-networks/">
                    Academy for Computer Networks
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/academy/academy-for-design/">
                    Academy for Design
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/academy/ithink-academy/">
                    {" "}
                    IThink Academy
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/courses/cisco/ccna-academy-program/">
                    CCNPA Academy
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/courses/cisco/ccna-course-program/">
                    CCNP Academy
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className={classes.col}>
              <h3>
                <a href="https://www.sedc.mk/courses/microsoft/">COURSES</a>
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.sedc.mk/courses/microsoft/">Microsoft</a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/courses/cisco/">Cisco</a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/courses/adobe/">Adobe</a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/courses/comptia/">CompTIA</a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/?page_id=364">Hi-Tech courses</a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className={classes.col}>
              <h3>
                <a href="https://www.sedc.mk/courses/soft-skills/">
                  BUSINESS COURSES
                </a>
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.sedc.mk/courses/soft-skills/">
                    Soft Skills
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/business-courses/business-analysis/">
                    Business Analysis
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/business-courses/pmp/">PMP</a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/business-courses/scrum/">
                    SCRUM MASTER
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/courses/consulting/">
                    Consulting
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/courses/sales-trainings/">
                    Sales Trainings
                  </a>
                </li>
                <li>
                  <a href="sedc.mk/business-courses/business-simulation/">
                    Business Simulation
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 5 */}
            <div className={classes.col}>
              <h3>
                <a href="https://www.sedc.mk/testing/pearson-vue/">TESTING</a>
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.sedc.mk/testing/pearson-vue/">
                    Pearson Vue
                  </a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/testing/prometric/">Prometric</a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/testing/certiport/">Certiport</a>
                </li>
                <li>
                  <a href="https://www.sedc.mk/?page_id=439">ECDL</a>
                </li>
                <li>
                  <h3>
                    <a href="https://www.sedc.mk/facilty-use/">FACILITY USE</a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="https://www.sedc.mk/contact-us/">CONTACT</a>
                  </h3>
                </li>
              </ul>
            </div>
            <div className={classes.col}>
              <div className={classes.col__social}>
                <h3>FOLLOW US</h3>
                <ul>
                  <li className={classes.social__footer__li}>
                    <a
                      href="https://www.facebook.com/SEDCfanpage/"
                      aria-label="link to facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                  </li>
                  <li className={classes.social__footer__li}>
                    <a
                      href="https://www.youtube.com/channel/UC6952vSkgmQ5y5ap9Q_6GdA"
                      aria-label="link to youtube"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                      </svg>
                    </a>
                  </li>
                  <li className={classes.social__footer__li}>
                    <a
                      href="https://www.linkedin.com/company/seavus-education-and-development-center"
                      aria-label="Link to LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.footer__logo}>
            <a href="https://aricomagroup.com/en/">
              <img src="/img/aricoma_logo.png" alt="ARICOMA-GROUP" />
            </a>
          </div>
          <div className={classes.copyrightTextContainer}>
            <small>
              &copy; 2021. All rights reserved. Seavus Education and Development
              Center
            </small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
