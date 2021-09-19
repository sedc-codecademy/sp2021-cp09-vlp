import React, { useState, useEffect } from "react";
import classes  from "../Modal/Modal.module.scss";

const Modal = props => {
    const { AcademyData, onRequestClose } = props;

    useEffect(()=>{
        function onKeyDown(event){
            if(event.keyCode === 27 || event.keyCode === 8) {
                onRequestClose();
            }
        };

        document.body.style.overflow ="hidden";
        document.addEventListener("keydown",onKeyDown);

        return ()=> {
            document.body.style.overflow="visible";
            document.removeEventListener("keydown", onKeyDown)
        }
    })

    return (
        <div className={classes.modalBackground}>
			<div className={classes.modal}>
                
                <div className={classes.btnContainer} >
                 <button className={classes.closeBtn} type="button" onClick={onRequestClose}>
					X 
				</button>
                </div>

                <div className={classes.infoSection}>
                    <h2 className={classes.courseMainTitle}>Title of Subject </h2>
                    <h3 className={classes.courseSubTitle}>Sub-Title of Subject</h3>

                    <h3 className={classes.courseHeader}>Course Summary</h3>
                    <p className={classes.subjectInfo}>Elit minim veniam ea qui ea dolor do sunt.Veniam dolore magna dolore deserunt labore magna.Tempor ullamco culpa irure in sit voluptate excepteur aute consectetur exercitation.Et reprehenderit ex ea aliquip ipsum eu incididunt fugiat enim elit exercitation ex.
                    </p>
                </div>  

                <h4 className={classes.courseProgression}>Course Progression </h4>         
			
                <div className={classes.infoContainer}>
                    <div className={classes.infoBox}>Example</div>
                    <div className={classes.infoBox}>Example</div>
                    <div className={classes.infoBox}>Example</div>
                    <div className={classes.infoBox}>Example</div>
                    <div className={classes.infoBox}>Example</div>
                </div>
                 
                <div className={classes.linkSection}>
                    <h3 className={classes.linkHeader}>Further Reading</h3>
                    <a className={classes.link} href="/">Example 1</a> <br/>
                    <a className={classes.link} href="/">Example 2</a> <br/>
                    <a className={classes.link} href="/">Example 3</a> <br/>
                </div>
			</div>
		</div>
	);
}

export default Modal;