const UiService = {
    chatHistory: document.getElementById("chatHistory"),
    recommendedDiv: document.getElementById("recommendedDiv"),
    modalContent: document.getElementById("modalContent"),

    //Prints the very first message for the user
    firstMessage: function () {
        this.chatHistory.innerHTML = `
        <div class="greetingMessage">Welcome to the<br>
         Seavus Education Chat Bot!</div>
         <div class="greetingMessageQue">How can we help you?</div>
         <hr class="chat-js-hr">`;
    },

    //Prints a user message and random bot message in chat history(Depending on the choice)
    replyMessages: function (elementName, elementMessages) {
        ButtonsService.buttonsDiv.innerHTML = "";
        ButtonsService.mainButtonsDiv.innerHTML = "";

        const randomIndex = Math.floor(Math.random() * elementMessages.length);
        const item = elementMessages[randomIndex];

        this.chatHistory.innerHTML += `
        <div chatBotName>
            <span class="chatUserYou">You</span>
            <div class="chatBubblesUser">${elementName}</div>
        </div>`;
        this.toggleLoader();
        UiService.sleep().then(() => {
            this.chatHistory.innerHTML += `
            <div>
                <span class="chatBotName">${AnimationsService.chatBotBubbleName}</span>
                <div class="chatBubblesBot">${item}</div>
            </div>`;
            chatHistory.scrollIntoView({ block: 'end', behavior: 'smooth' });
        });
    },

    //Print the actual required INFO name and message
    replyInfoMessage: function (infoName, infoMessage) {
        ButtonsService.buttonsDiv.innerHTML = "";

        this.chatHistory.innerHTML += `
        <div >
            <span class="chatUserYou">You</span>
            <div class="chatBubblesUser">${infoName}</div>
        </div>`
        this.toggleLoader();
        UiService.sleep().then(() => {
            this.chatHistory.innerHTML += `
            <div>
                <span class="chatBotName">${AnimationsService.chatBotBubbleName}</span>
                <div class="chatBubblesBot">${infoMessage}</div>
            </div>`;
            chatHistory.scrollIntoView({ block: 'end', behavior: 'smooth' });
        });
    },

    //Prints the INFO for the Object
    printAcademyInfo: function (neededInfo, elementId, branchName, searchInput) {
        ButtonsService.mainButtonsDiv.innerHTML = "";

        for (const academy of DataService.cachedData[branchName]) {
            for (const studyProgram of academy.studyPrograms) {
                if (elementId === studyProgram.nameId) {
                    if (studyProgram[neededInfo.toLowerCase().replace(/\s/g, "")] !== undefined) {
                        UiService.replyInfoMessage(searchInput === undefined ? neededInfo : searchInput, studyProgram[neededInfo.toLowerCase().replace(/\s/g, "")]);
                        UiService.sleep().then(() => { ButtonsService.isConversationDoneButtons(); });
                        break;
                    } else if (neededInfo === "Apply") {
                        UiService.replyInfoMessage(searchInput === undefined ? neededInfo : searchInput, ["Thank you for your interest!"]);
                        ApplyAndPriceService.getApplyForm(branchName, studyProgram.name);
                        UiService.sleep().then(() => { ButtonsService.isConversationDoneButtons(); });
                        break;
                    } else if (neededInfo === "Price") {
                        UiService.replyInfoMessage(searchInput === undefined ? neededInfo : searchInput, ["Here is a preview of the prices!"]);
                        ApplyAndPriceService.getPriceTable(branchName, studyProgram.name);
                        UiService.sleep().then(() => { ButtonsService.isConversationDoneButtons(); });
                        break;
                    }
                }
            }
        }
    },

    //Prints the INFO for the Testing object
    printTestingInfo: function (neededInfo, elementId) {
        for (const test of DataService.cachedData.Testing) {
            if (test.nameId === elementId) {
                if (test[neededInfo.toLowerCase().replace(/\s/g, "")] !== undefined) {
                    this.replyInfoMessage(neededInfo, test[neededInfo.toLowerCase().replace(/\s/g, "")]);
                    UiService.sleep().then(() => { ButtonsService.isConversationDoneButtons(); });
                    break;
                } else if (neededInfo === "Apply") {
                    UiService.replyInfoMessage(neededInfo, ["Thank you for your interest!"]);
                    ApplyAndPriceService.getApplyForm("Testing");
                    UiService.sleep().then(() => { ButtonsService.isConversationDoneButtons(); });
                    break;
                }
            }
        }
    },

    //Prints message for the answer in the user got everything he needed
    printConversationDone: function (choice) {
        if (choice === "Yes") {
            AnimationsService.chatBotBubbleName = "Mickey";
            this.replyInfoMessage(choice, ["What do you wanna to talk about next?"]);
            UiService.sleep().then(() => { ButtonsService.getMainButtons(DataService.cachedData); });
        } else if (choice === "No") {
            UiService.replyMessages(choice, DataService.cachedReplyMessages.ShortTalk.Goodbye.reply);
            UiService.sleep().then(() => { AnimationsService.recommendedBtnsAnimations(); });
        }
    },

    //Shows and hides the loader
    toggleLoader: function () {
        let loader = document.getElementById("loader");
        loader.style.display = "block";
        loader.scrollIntoView({ block: 'end', behavior: 'smooth' });
        setTimeout(() => {
            loader.style.display = "none";
        }, 2000)
    },

    //Pauses everything for some time
    sleep: function () {
        return new Promise(resolve => setTimeout(resolve, 2000));
    },

    // Toggles between 2 view ports
    toggleDisplayView: function (view1, view2) {
        view1.style.display = "none";
        view2.style.display = "flex";
        view2.style.overflowX = "hidden";
    },

    // Changes the quizzes/games icon
    changeQuizzesGamesIconAndFunctionality: function (gameOrQuizFlag, item, viewPort) {
        if (gameOrQuizFlag) {
            item.innerHTML = `<img src="./CODE/src/img-avatars/chatButton.svg" height="20rem">`;
            if (item.id === "chatQuizzes") {
                GamesService.areGamesOpen = false;
                AnimationsService.chatGames.innerHTML = `<img src="./CODE/src/img-avatars/games.svg" height="25rem">`;
            } else {
                QuizzesService.areQuizzesOpen = false;
                AnimationsService.chatQuizzes.innerHTML = `<img src="./CODE/src/img-avatars/quizzes.svg" height="25rem">`;
            }
            this.toggleDisplayView(AnimationsService.chatWindow, viewPort);
        } else {
            if (item.id === "chatQuizzes") {
                item.innerHTML = `<img src="./CODE/src/img-avatars/quizzes.svg" height="25rem">`;
            } else {
                item.innerHTML = `<img src="./CODE/src/img-avatars/games.svg" height="25rem">`;
            };
            this.toggleDisplayView(viewPort, AnimationsService.chatWindow);
        };
    },

    // Changes flag value
    changeFlag: function (flag) {
        if (flag) {
            return false;
        };
        return true;
    },

    // Resets chat-window if called from another viewport
    resetChatWindow: function () {
        this.toggleDisplayView(QuizzesService.gamesAndQuizzesWindow, AnimationsService.chatWindow);
        AnimationsService.chatWindow.style.overflowX = "hidden";
        AnimationsService.chatGames.innerHTML = `<img src="./CODE/src/img-avatars/games.svg" height="25rem">`;
        GamesService.areGamesOpen = false;
        AnimationsService.chatQuizzes.innerHTML = `<img src="./CODE/src/img-avatars/quizzes.svg" height="25rem">`;
        QuizzesService.areQuizzesOpen = false;
    },

    // Stops user from clicking buttons too fast
    disableGamesAndQuizzesButtons: function (flag) {
        if (flag) {
            AnimationsService.chatQuizzes.disabled = true;
            AnimationsService.chatGames.disabled = true;
        }
        else {
            AnimationsService.chatQuizzes.disabled = false;
            AnimationsService.chatGames.disabled = false;
        }
    },

    //Changes modal style to block and sets height and width
    displayModalWindow: function (flag) {
        ApplyAndPriceService.myModal.style.display = "block";

        if (window.innerWidth < 821) {
            this.modalContent.style.height = "100%";
            this.modalContent.style.width = "100%";
            QuizzesService.popUpQuizzes.style.display = "none";
            QuizzesService.form.style.display = "none";
            ApplyAndPriceService.popUp.style.display = "block";
            return;
        }

        this.modalContent.style.height = "70%";
        this.modalContent.style.width = "40%";
        this.modalContent.style.paddingBottom = "2%";
        QuizzesService.form.style.display = "none";
        QuizzesService.popUpQuizzes.style.display = "none";
        ApplyAndPriceService.popUp.style.display = "block";
        ApplyAndPriceService.popUp.style.overflowY = "hidden";
        ApplyAndPriceService.popUp.style.paddingBottom = "0%";
        ApplyAndPriceService.closeModalButton.style.marginTop = "-6%";

        switch (flag) {
            case "price":
            case "apply":
                ApplyAndPriceService.popUp.style.paddingBottom = "5%";
                break;
            case "games":
                this.modalContent.style.height = "80%";
                this.modalContent.style.width = "90%";
                ApplyAndPriceService.popUp.style.overflowY = "auto";
                this.modalContent.style.paddingBottom = "7%";
                ApplyAndPriceService.closeModalButton.style.marginTop = "-2.5%";
                break;
            case "quizzes":
                ApplyAndPriceService.popUp.style.display = "none";
                this.modalContent.style.width = "45%";
                QuizzesService.popUpQuizzes.style.display = "block";
                QuizzesService.form.style.display = "block";
                QuizzesService.form.scrollIntoView({ block: 'start', behavior: 'smooth' });
                break;
            case "contact":
                ApplyAndPriceService.popUp.style.overflowY = "auto";
                break;
        }
    },

    //Prints contact button form
    printContactButton: function(){
        ButtonsService.mainButtonsDiv.innerHTML += `<button class="contactUs" id="contactUs" onclick="ContactUsForm.printContactUsForm()"> Contact Us </button>`;
        buttonsDiv.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
};//PROPERTIES: Chat history div, Recommended slide div, Modal pop up wrapper div