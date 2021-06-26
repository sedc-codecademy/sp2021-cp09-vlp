const AnimationsService = {
    avatarImgDiv: document.getElementById("imgLogo"),
    chatGames: document.getElementById("chatGames"),
    chatQuizzes: document.getElementById("chatQuizzes"),
    chatName : document.getElementById("chatName"),
    recommendedSlide: document.getElementById("recommendedSlide"),
    chatWindow: document.getElementById("chatWindow"),
    isChatInitialized: false,
    chatBotBubbleName: "",

    //Animates the header - Image, Name, Icons
    headerAnimation: function () {
        this.isChatInitialized = true;
        if(window.innerWidth < 821){
            this.avatarImgDiv.classList.add("avatarAnimation");

            this.avatarImgDiv.style.marginTop = "0rem";
            this.avatarImgDiv.style.marginLeft = "1.25rem";

            this.chatName.classList.add("fadeIn-avatarName");
            this.chatName.addEventListener("animationend", () => {
                this.chatName.style.opacity = "1";
            });
        }else {
            this.avatarImgDiv.classList.add("avatarAnimation");

            this.avatarImgDiv.addEventListener("animationend", () => {
                this.avatarImgDiv.style.marginTop = "-1.25rem";
                this.avatarImgDiv.style.marginLeft = "1.25rem";
            });

            this.chatName.classList.add("fadeIn-avatarName");
            this.chatName.addEventListener("animationend", () => {
                this.chatName.style.opacity = "1";
            });

            this.chatGames.classList.add("games-quizzesAnimation");
            this.chatGames.addEventListener("animationend", () => {
                this.chatGames.classList.remove("chat-games");
                this.chatGames.classList.add("chat-games-icon");
                this.chatGames.innerHTML = `<img src="./CODE/src/img-avatars/games.svg" height="25rem">`;
            });

            this.chatQuizzes.classList.add("games-quizzesAnimation");
            this.chatQuizzes.addEventListener("animationend", () => {
                this.chatQuizzes.classList.remove("chat-quizzes");
                this.chatQuizzes.classList.add("chat-quizzes-icon");
                this.chatQuizzes.innerHTML = `<img src="./CODE/src/img-avatars/quizzes.svg" height="25rem">`;
            });
        }
    },

    //Animates the recommendations slide
    recommendedBtnsAnimations: function () {
        UiService.chatHistory.scrollIntoView({ block: 'end', behavior: 'smooth' });
        ButtonsService.recommendationsButtons();

        UiService.recommendedDiv.style.display = "block";
        AnimationsService.recommendedSlide.classList.add("slider");

        this.recommendedSlide.addEventListener("animationiteration", () => {
            ButtonsService.recommendationsButtons();
        });
        UiService.recommendedDiv.scrollIntoView({ block: 'end', behavior: 'smooth' });
    },

    //Changes the bot personality depending on the chosen academy
    changeImageHead: function(academy){
        if(window.innerWidth < 821){
            AnimationsService.chatName.style.marginTop = "0rem";
        }else{
            if(academy === 'haralampiye'){
                AnimationsService.chatName.style.marginTop = "0.9rem";
            }else{
                AnimationsService.chatName.style.marginTop = "0.3rem";
            }
        }
        switch (academy) {
            case 'programming':
            case 'Web Development':
                AnimationsService.avatarImgDiv.style.backgroundImage = "url(./CODE/src/img-avatars/CODE.png)";
                AnimationsService.chatName.innerHTML = "Brian<br>Web Development";
                AnimationsService.chatBotBubbleName = "Brian";
                break;
            case 'computerNetworks':
            case 'CloudOps Network Engineer':
            case 'Security Specialist':
                AnimationsService.avatarImgDiv.style.backgroundImage = "url(./CODE/src/img-avatars/Networks.png)";
                AnimationsService.chatName.innerHTML = "Jimmy<br>Computer Networks";
                AnimationsService.chatBotBubbleName = "Jimmy";
                break;
            case 'design':
            case 'Graphic Designer':
            case 'Web Designer':
            case 'Game Designer':
                AnimationsService.avatarImgDiv.style.backgroundImage = "url(./CODE/src/img-avatars/DESIGN.png)";
                AnimationsService.chatName.innerHTML = "Michelangelo<br>Design Academy";
                AnimationsService.chatBotBubbleName = "Michelangelo";
                break;
            case 'softwareTesting':
            case 'Software Tester':
                AnimationsService.avatarImgDiv.style.backgroundImage = "url(./CODE/src/img-avatars/QA.png)";
                AnimationsService.chatName.innerHTML = "Jenny<br>Software Testing";
                AnimationsService.chatBotBubbleName = "Jenny";
                break;
            // case 'dataScience':
                // AnimationsService.avatarImgDiv.style.backgroundImage = "url(./CODE/src/img-avatars/.png)";
                // AnimationsService.chatName.innerHTML = "Bradley<br>Data Science";
                // AnimationsService.chatBotBubbleName = "Bradley";
            //     break;
            // case 'digitalMarketing':
                // AnimationsService.avatarImgDiv.style.backgroundImage = "url(./CODE/src/img-avatars/.png)";
                // AnimationsService.chatName.innerHTML = "Connor<br>Digital Marketing";
                // AnimationsService.chatBotBubbleName = "Connor";
            //     break;
            // case 'iThink':
                // AnimationsService.avatarImgDiv.style.backgroundImage = "url(./CODE/src/img-avatars/.png)";
                // AnimationsService.chatName.innerHTML = "Benji<br>iThink Academy";
                // AnimationsService.chatBotBubbleName = "Benji";
            //     break;
            case 'haralampiye':
                AnimationsService.avatarImgDiv.style.backgroundImage = "url(./CODE/src/img-avatars/HARALAMPIYE.png)";
                AnimationsService.chatName.innerHTML = "Mickey<br>SEDC Chat Bot";
                AnimationsService.chatBotBubbleName = "Mickey";
                break;
        }
    },

    //Functionality for window resize games and quizzes feature
    onResizeGamesAndQuizzes: function(){
        if(this.isChatInitialized){
            if(window.innerWidth < 821){
                this.chatGames.style.display = "none";
                this.chatQuizzes.style.display = "none";
                this.avatarImgDiv.style.marginTop = "0rem";
                this.avatarImgDiv.style.marginLeft = "1.25rem";
            }else{
                this.chatGames.style.display = "block";
                this.chatQuizzes.style.display = "block";

                this.chatGames.classList.remove("chat-games");
                this.chatGames.classList.add("chat-games-icon");
                this.chatGames.innerHTML = `<img src="./CODE/src/img-avatars/games.svg" height="25rem">`;

                this.chatQuizzes.classList.remove("chat-quizzes");
                this.chatQuizzes.classList.add("chat-quizzes-icon");
                this.chatQuizzes.innerHTML = `<img src="./CODE/src/img-avatars/quizzes.svg" height="25rem">`;

                this.avatarImgDiv.style.marginTop = "-1.25rem";
                this.avatarImgDiv.style.marginLeft = "1.25rem";
            }
        }
    }
};//PROPERTIES: The image div, Games button, Quizzes button, Name div, Recommended buttons slide, Chat div, Bool if the chat is initialized