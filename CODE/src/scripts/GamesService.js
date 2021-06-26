const GamesService = {
    areGamesOpen: false,

    //Register event for the games button and prints buttons for all the games
    printGamesMenu: function () {
        AnimationsService.chatGames.addEventListener('click', function () {
            UiService.disableGamesAndQuizzesButtons(true);
            GamesService.areGamesOpen = UiService.changeFlag(GamesService.areGamesOpen);

            if(!AnimationsService.isChatInitialized){
                AnimationsService.headerAnimation();
                AnimationsService.chatGames.addEventListener("animationend", function(){
                    UiService.changeQuizzesGamesIconAndFunctionality(GamesService.areGamesOpen, AnimationsService.chatGames, QuizzesService.gamesAndQuizzesWindow);
                });
            }else{
                UiService.changeQuizzesGamesIconAndFunctionality(GamesService.areGamesOpen, AnimationsService.chatGames, QuizzesService.gamesAndQuizzesWindow);
            }

            QuizzesService.gamesAndQuizzesWindow.innerHTML = `<p id="gamesMessage">Choose a Game</p> <hr class="chat-js-hr">`;
            QuizzesService.gamesAndQuizzesWindow.innerHTML +=
                `<div id="twoRowBtnDiv" class="twoRowBtnFlex">
                    <button id="clashOfCode" class="btnCard gamesCardBorderColor" onclick="GamesService.startGame('https://www.codingame.com/ide/puzzle/onboarding')"><div class="btnCardName gamesCardColor">Clash of Code</div><div class="btnCardDescription">Description</div></button>
                    <button id="cssDinner" class="btnCard gamesCardBorderColor" onclick="GamesService.startGame('https://flukeout.github.io/')"><div class="btnCardName gamesCardColor">CSS Dinner</div><div class="btnCardDescription">Description</div></button>
                    <button id="flexboxFroggy" class="btnCard gamesCardBorderColor" onclick="GamesService.startGame('http://flexboxfroggy.com/')"><div class="btnCardName gamesCardColor">FlexBox Froggy</div><div class="btnCardDescription">Description</div></button>
                    <button id="vimAdventures" class="btnCard gamesCardBorderColor" onclick="GamesService.startGame('https://vim-adventures.com/')"><div class="btnCardName gamesCardColor">VIM Adventures</div><div class="btnCardDescription">Description</div></button>
                    <button id="elevatorSaga" class="btnCard gamesCardBorderColor" onclick="GamesService.startGame('http://play.elevatorsaga.com/')"><div class="btnCardName gamesCardColor">Elevator Saga</div><div class="btnCardDescription">Description</div></button>
                    <button id="kidsGames" class="btnCard gamesCardBorderColor" onclick="GamesService.startGame('https://blockly.games/')"><div class="btnCardName gamesCardColor">Kids Coding Games</div><div class="btnCardDescription">Description</div></button>
                </div>`;

                UiService.disableGamesAndQuizzesButtons(false);
        });
    },

    //Starts the chosen game from the games menu
    startGame: function (url) {
        UiService.displayModalWindow("games");

        ApplyAndPriceService.popUp.innerHTML = `<iframe src= ${url} scrolling="no" seamless="seamless" marginheight="0" marginwidth="0" frameBorder="0" width="100%" height="230%" ></iframe>`;
    }
};//PROPERTIES: Bool if the games are opened