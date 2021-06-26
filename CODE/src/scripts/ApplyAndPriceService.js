const ApplyAndPriceService = {
    myModal : document.getElementById("myModal"),
    popUp : document.getElementById("popUp"),
    closeModalButton : document.getElementById("close"),
    applicationUrl : "",
    priceUrl : "",

    //Gets the application form needed
    getApplyForm : function(branch, elementName){
        if(branch === "Academies"){
            if(elementName.includes("iThink")){
                this.applicationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfrbe6vM-Kje6VBpPSKUwzE_oe34UayAprtJoM_T4-RrswHeg/viewform";
            }else{
                this.applicationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfamWShsXlBZqvMf3WoAKpr2jW5zr4AO7a4XGD7ch_V1KvVmg/viewform";
            }
        }else if(branch === "Testing"){
            this.applicationUrl = "https://docs.google.com/forms/d/1F6S-iETffqmauVAKLNTr7g0W0WRoDh2gefZ8D-BoqJI/viewform?edit_requested=true";
        }else if(branch === "Courses"){
            this.applicationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd1YbaZKEYnKHaxDaoJMtAHNiyTceSi6I-K7KkeR3kaRk0pFw/viewform";
        }

        UiService.displayModalWindow("apply");
        ApplyAndPriceService.popUp.innerHTML = `<iframe src="${ApplyAndPriceService.applicationUrl}" width="97%" height="100%" frameborder="0" marginheight="0" marginwidth="0"></iframe>`;
    },

    //Gets  the needed price table
    getPriceTable : function(branch){
        if(branch === "Academies"){
            ApplyAndPriceService.priceUrl = "https://dejan-stojkoski.github.io/AcademiesPrices//";
        }else if(branch === "Courses"){
            ApplyAndPriceService.priceUrl = "https://dejan-stojkoski.github.io/CoursesPrices/";
        }

        UiService.displayModalWindow("price");
        ApplyAndPriceService.popUp.innerHTML =
        `<iframe src="${ApplyAndPriceService.priceUrl}" width="97%" height="100%" frameborder="0" marginheight="0" marginwidth="0"></iframe>`;
    }
};//PROPERTIES: The Modal div, Pop up from the modal, Close modal button, Application url, Price table url