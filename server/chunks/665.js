"use strict";
exports.id = 665;
exports.ids = [665];
exports.modules = {

/***/ 6665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ webDevDataMapper)
/* harmony export */ });
const webDevDataMapper = (data)=>{
    return {
        id: data.academy_name.post_name,
        title: data.academy_name.post_title,
        study_programs: [
            {
                program_package: data.program_package_includes.map((el)=>el.program_package_title
                ),
                terms_and_documents: data.terms_and_documents_for_registration,
                scholarship_opportunities: data.scholarship_opportunities.map((el)=>el.scholarship_opportunities_title
                ),
                discount_data: data.discount_for_early_registration,
                id: "web-dev",
                title: "Web Developer",
                price: data.price,
                overview: data.overview,
                job_opportunities: data.job_opportunities,
                trainers: data.trainers,
                timeline: {
                    duration: `${data.length_in_month} | ${data.length_in_semestar}`,
                    classes: data.total_classes,
                    lectures: data.timeline_note,
                    semesters: [
                        {
                            list_title: "Skopje",
                            list_data: data["timeline-skopje"].map((el)=>el.skopje
                            )
                        },
                        {
                            list_title: "Ohrid",
                            list_data: data["timeline-ohrid"].map((el)=>el.ohrid
                            )
                        },
                        {
                            list_title: "Nish",
                            list_data: data["timeline-nish"].map((el)=>el.nish
                            )
                        }, 
                    ]
                },
                competencies: {
                    list_title: "Competencies",
                    list_data: data.competencies.map((el)=>el.competencies_title
                    )
                },
                courses: data.study_program.map((program)=>{
                    return {
                        course_title: program.study_program_title,
                        course_summary: program.study_program_more[0].course_summary,
                        course_progression: program.study_program_more[0].course_progression.map((el)=>el.course_progression_item
                        ),
                        further_reading: program.study_program_more[0].further_reading_item
                    };
                })
            }, 
        ]
    };
};


/***/ })

};
;