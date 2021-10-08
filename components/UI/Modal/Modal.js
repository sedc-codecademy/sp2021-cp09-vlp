import React, { useState, useEffect } from "react";
import classes  from "../Modal/Modal.module.scss";

const Modal = (props) => {
    const { toggleModal,isModalOpen } = props;

    useEffect(()=>{
        function onKeyDown(event){
            if(event.keyCode === 27 || event.keyCode === 8) {
               toggleModal();
               console.log('Closed Modal')
            }
        };

        document.body.style.overflow ="hidden";
        document.addEventListener("keydown",onKeyDown);
        console.log('I rendered in modal useEffect()')

        return ()=> {
            document.body.style.overflow="visible";
            document.removeEventListener("keydown", onKeyDown)
        }
    })

    return (
        <React.Fragment>
            <div className={classes.modalBackground}>
                <div className={classes.modal}>
                            
                    <button className={classes.closeBtn} type="button" onClick={()=>toggleModal(!isModalOpen)}>
                       ✖
                    </button>

                    <div className={classes.infoSection}>
                        <h2 className={classes.courseMainTitle}>Title of Subject  </h2>
                        {/* <h3 className={classes.courseSubTitle}>(Sub-Title of Subject)</h3> */}

                        <h3 className={classes.courseHeader}>Course Summary</h3>
                        <p className={classes.subjectInfo}>Elit minim veniam ea qui ea dolor do sunt.Veniam dolore magnaElit minim veniam ea qui ea dolor do sunt.Veniam dolore magnaElit minim veniam ea qui ea dolor do sunt.Veniam dolore magnaElit minim veniam ea qui ea dolor do sunt.Veniam dolore magnaElit minim veniam ea qui ea dolor do sunt.Veniam dolore magnaElit minim veniam ea qui ea dolor do sunt.Veniam dolore magna dolore deserunt labore magna.Tempor ullamco culpa irure in sit voluptate excepteur aute consectetur exercitation.Et reprehenderit ex ea aliquip ipsum eu incididunt fugiat enim elit exercitation ex.
                        </p>
                        <h4 className={classes.courseProgression}> Course Progression</h4>
                    </div>  

                    <div className={classes.infoContainer}>
                        <div className={classes.infoBox}><div>Example Example Example Example Example</div></div>
                        <div className={classes.infoBox}><div>Example Example Example Example Example</div></div>
                        <div className={classes.infoBox}><div>Example Example Example Example Example</div></div>
                        <div className={classes.infoBox}><div>Example Example Example Example Example</div></div>
                        <div className={classes.infoBox}><div>Example Example Example Example Example</div></div>
                        <div className={classes.infoBox}><div>Example Example Example Example Example</div></div>
                    </div>
                    
                    <div className={classes.linkSection}>
                        <h3 className={classes.linkHeader}>Further Reading</h3>
                        <a className={classes.link} href="https://en.wikipedia.org/wiki/HTML">Example 1</a> 
                        <a className={classes.link} href="https://en.wikipedia.org/wiki/CSS">Example 2</a>
                        <a className={classes.link} href="https://en.wikipedia.org/wiki/JavaScript">Example 3</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
	);
}

export default Modal;