const ButtonsService = {
    buttonsDiv: document.getElementById("buttonsDiv"),
    mainButtonsDiv: document.getElementById("mainButtonsDiv"),
    chatMinimize: document.getElementById("chatMinimize"),
    chatMaximize: document.getElementById("chatMaximize"),

    //Prints main buttons(Academies, Courses, Testing)
    getMainButtons: function (data) {
        this.buttonsDiv.innerHTML = "";
        AnimationsService.changeImageHead('haralampiye');

        if(this.mainButtonsDiv.innerHTML !== "") return;

        for (const button in data) {
            this.mainButtonsDiv.innerHTML += `<button id="${button}" class="${button}" onclick="ButtonsService.mainButtonsLogic('${button}')">${button}</button>`;
        }
        UiService.printContactButton();
        buttonsDiv.scrollIntoView({ block: 'end', behavior: 'smooth' });
    },

    //Main buttons event logic and function call
    mainButtonsLogic: function (branch, searchString) {
        AnimationsService.headerAnimation();
        this.mainButtonsDiv.innerHTML = "";
        UiService.replyMessages(searchString === undefined ? branch : searchString, DataService.cachedReplyMessages.ShortTalk.MainButtonReplies);

        switch (branch) {
            case 'Testing':
                UiService.sleep().then(() => { ButtonsService.getTestingButtons(DataService.cachedData.Testing); });
                break;
            case 'Academies':
                UiService.sleep().then(() => { ButtonsService.getButtons(DataService.cachedData.Academies, 'Academies'); });
                break;
            case 'Courses':
                UiService.sleep().then(() => { ButtonsService.getButtons(DataService.cachedData.Courses, 'Courses'); });
                break;
        }
    },

    //Prints the needed buttons
    getButtons: function (array, branchName) {
        this.buttonsDiv.innerHTML = "";

        for (const element of array) {
            this.buttonsDiv.innerHTML += `<button id="${element.nameId}" class="chatBotBtns" onclick="ButtonsService.getDataButtons('${element.nameId}', '${branchName}')">${element.name}</button>`;
        }
        buttonsDiv.scrollIntoView({ block: 'end', behavior: 'smooth' });
    },

    //Logic for the buttons (Checks If the array holds the real data)
    getDataButtons: function (buttonId, branchName, searchString) {
        this.buttonsDiv.innerHTML = "";
        AnimationsService.changeImageHead(buttonId);

        let data = DataService.cachedData[branchName];
        let check = false;
        data.forEach(element => { if (element.nameId === buttonId) { check = true; } });

        if (!check) {
            data.forEach(element => {
                element.studyPrograms.forEach(program => {
                    if (program.nameId === buttonId) {
                        data = element.studyPrograms;
                    }
                });
            });
        }

        for (const element of data) {
            if (element.nameId === buttonId) {
                if (element.studyPrograms !== undefined) {
                    UiService.replyMessages(searchString === undefined ? element.name : searchString, element.reply);
                    UiService.sleep().then(() => { ButtonsService.getButtons(element.studyPrograms, branchName); });
                }
                else {
                    UiService.replyMessages(element.name, element.reply);
                    UiService.sleep().then(() => { ButtonsService.getInfoButtons(element, branchName); });
                }
            }
        }
    },

    //Prints the buttons for Object info
    getInfoButtons: function (element, branchName) {
        this.buttonsDiv.innerHTML = "";
        AnimationsService.changeImageHead(element.name);

        for (const button of element.infoProperties) {
            this.buttonsDiv.innerHTML += `<button id = "${button}" class="chatBotBtns" onclick="UiService.printAcademyInfo('${button}','${element.nameId}', '${branchName}')">${button}</button>`;
       }
       buttonsDiv.scrollIntoView({ block: 'end', behavior: 'smooth' }) 
    },

    //Prints the buttons for testing objects
    getTestingButtons: function (array) {
        this.buttonsDiv.innerHTML = "";

        for (const button of array) {
            this.buttonsDiv.innerHTML += `<button id = "${button.nameId}" class="chatBotBtns" onclick="ButtonsService.getInfoTestingButtons('${button.nameId}')">${button.name}</button>`;
        }
        buttonsDiv.scrollIntoView({ block: 'end', behavior: 'smooth' });

    },

    //Prints the buttons for Testing Object info
    getInfoTestingButtons: function (element) {
        this.buttonsDiv.innerHTML = "";

        for (const test of DataService.cachedData.Testing) {
            if (element === test.nameId) {
                element = test;
            }
        }

        UiService.replyMessages(element.name, element.reply);

        for (const button of element.infoProperties) {
            UiService.sleep().then(() => {
                this.buttonsDiv.innerHTML += `<button id = "${button}" class="chatBotBtns" onclick="UiService.printTestingInfo('${button}','${element.nameId}')">${button}</button>`;
                buttonsDiv.scrollIntoView({ block: 'end', behavior: 'smooth' });
            });
        }
    },

    //Pop the question if the user got everything he needed
    isConversationDoneButtons: function () {
        this.buttonsDiv.innerHTML = "";
        UiService.chatHistory.innerHTML += `<div class="chatBubblesBot">May I help you with something else?</div>`;

        let answers = ["Yes", "No"];
        for (const answer of answers) {
            this.buttonsDiv.innerHTML += `<button id = "${answer}" class="chatBotBtns" onclick="UiService.printConversationDone('${answer}')">${answer}</button>`;
        }
        buttonsDiv.scrollIntoView({ block: 'end', behavior: 'smooth' });
    },

    //Creates random buttons for the recommendations slide and fills an array with their indexes
    recommendationsButtons: function(){
        AnimationsService.recommendedSlide.innerHTML = "";
        let data = DataService.cachedData;

        for(let element in data){
            const randomIndex = Math.floor(Math.random() * data[element].length);
            if(element === 'Testing'){
                AnimationsService.recommendedSlide.innerHTML += `<button id="${data[element][randomIndex].nameId}" class="recommendedButtons" onclick="ButtonsService.findRecommendationButtonChoice('${randomIndex}','${element}')">${data[element][randomIndex].name}</button>`;
            }else{
                const randomProgram = Math.floor(Math.random() * data[element][randomIndex].studyPrograms.length);
                AnimationsService.recommendedSlide.innerHTML += `<button class="recommendedButtons" onclick="ButtonsService.findRecommendationButtonChoice('${randomIndex}', '${element}', '${data[element][randomIndex].studyPrograms[randomProgram].name}')">${data[element][randomIndex].studyPrograms[randomProgram].name}</button>`;
            }
        }
    },

    //Catch the event of the recommendation slide button click
    findRecommendationButtonChoice: function (elementId, branchName, studyProgramName) {
        UiService.recommendedDiv.style.display = "none";
        let data = DataService.cachedData[branchName];

        for (let element of data) {
            if (element.id == elementId) {
                if (branchName === 'Testing') {
                    ButtonsService.getInfoTestingButtons(element);
                } else {
                    for (let program of element.studyPrograms) {
                        if (program.name === studyProgramName) {
                            UiService.replyMessages(program.name, program.reply);
                            UiService.sleep().then(() => {
                                ButtonsService.getInfoButtons(program, branchName);
                                branchName === 'Academies' ? AnimationsService.changeImageHead(studyProgramName) : AnimationsService.changeImageHead('haralampiye');
                            });
                        }
                    }
                }
            }
        }
    }
};//PROPERTIES: The buttons div, The main buttons div, Minimize button, Maximize button