//ONLY CALLS FOR THE FUNCTIONS THAT NEEDS TO BE EXECUTED AT START AND LISTEN FOR WINDOW EVENTS
let chatMinimize = document.getElementById("chatMinimize");
let chatMaximize = document.getElementById("chatMaximize");
let mainWindow = document.getElementById("mainWindow");
let isChatBotOpened = true;
let searchInputWraper = document.getElementById("searchInputWraper");

//Minimize event
chatMinimize.addEventListener("click", () => {
    if (isChatBotOpened) {
        mainWindow.style.height = 0;
        mainWindow.style.transition = "0.5s ease-in-out";
        mainWindow.style.visibility = "hidden";
        chatMaximize.style.visibility = "visible";
        chatMaximize.style.transform = "translateY(0rem)";
        searchInputWraper.style.opacity = 0;
        chatMaximize.style.opacity = 1;
        isChatBotOpened = false;
        chatMaximize.classList.add("jello-horizontal");
    }
});

//Maximize event
chatMaximize.addEventListener("click", () => {
    if (!isChatBotOpened) {
        chatMaximize.classList.remove("jello-horizontal");
        setTimeout(() => {
            window.innerWidth < 821 ? mainWindow.style.height = "100%" : mainWindow.style.height = "80%";
            mainWindow.style.transition = "0.5s ease-in-out";
            mainWindow.style.visibility = "visible";
        }, 500);
        setTimeout(() => {
            searchInputWraper.style.opacity = 1;
        }, 1000);
        chatMaximize.style.transform = "translateY(-137.5rem)";
        chatMaximize.style.visibility = "hidden";
        chatMaximize.style.opacity = 0;
        isChatBotOpened = true;
    }
});

//Modal close on button
ApplyAndPriceService.closeModalButton.addEventListener("click", () => {
    ApplyAndPriceService.myModal.style.display = "none";
});

//Modal close on side
window.addEventListener("click", (event) => {
    if (event.target == ApplyAndPriceService.myModal) {
        ApplyAndPriceService.myModal.style.display = "none";
    }
});

window.addEventListener("load", chatMinimize.click());

//Chat Window scroll into view on screen resize
window.addEventListener("resize", () => {
    AnimationsService.onResizeGamesAndQuizzes();
    ButtonsService.buttonsDiv.scrollIntoView({ block: 'end', behavior: 'smooth' });
    UiService.recommendedDiv.scrollIntoView({ block: 'end', behavior: 'smooth' });

    if (window.innerWidth < 821) {
        UiService.toggleDisplayView(QuizzesService.gamesAndQuizzesWindow, AnimationsService.chatWindow);
    }

    if(window.innerWidth < 821){
        AnimationsService.chatName.style.marginTop = "0rem";
    }else{
        if(AnimationsService.chatName.innerText.includes("Mickey")){
            AnimationsService.chatName.style.marginTop = "0.9rem";
        }else{
            AnimationsService.chatName.style.marginTop = "0.3rem";
        }
    }
})

//Changes the voice button to a send button and reverse
SearchInputService.input.addEventListener("input", function () {
    VoiceRecognitionService.voiceRecognitionBtn.style.display = "none";
    SearchInputService.inputButton.style.display = "block";
    if (SearchInputService.input.value === "") {
        SearchInputService.inputButton.style.display = "none";
        VoiceRecognitionService.voiceRecognitionBtn.style.display = "block";
    }
});

// Check if the browser is firefox and disables voice input feature
let ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('firefox') > -1) {
    VoiceRecognitionService.voiceRecognitionBtn.style.display = "none";
    SearchInputService.inputButton.style.display = "block";
    VoiceRecognitionService.voiceRecognitionBtn.style.backgroundImage = "url(./CODE/src/img-avatars/send.svg)";
    VoiceRecognitionService.voiceRecognitionBtn.addEventListener("click", SearchInputService.inputButton.click);
} else {
    VoiceRecognitionService.voiceRecognition();
}

QuizzesService.form.addEventListener('submit', QuizzesService.checkRightAnswers);

DataService.getDataAsync();

DataService.fetchQuizzes();

UiService.firstMessage();

SearchInputService.getSearchInput();

QuizzesService.printQuizzesMenu();

GamesService.printGamesMenu();