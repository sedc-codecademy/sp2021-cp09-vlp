const DataService = {
    url: "https://raw.githubusercontent.com/sedc-codecademy/sp2021-cp10-dsc/main/JSON/DATA.json",
    cachedData: null,
    cachedReplyMessages: null,
    cachedQuizzes: null,

    //Fetch the data from JSON
    getDataAsync: async function () {
        try {
            let response = await fetch(`${this.url}`);
            let data = await response.json();
            DataService.cachedData = await data.Data;
            DataService.cachedReplyMessages = await data.ReplyMessages;
            ButtonsService.getMainButtons(data.Data);
            console.log(data.ReplyMessages);
        } catch (error) {
            AnimationsService.chatWindow.innerHTML =
                `<div id="errorWrapper" class="errorWrapper"> <img src="./CODE/src/img-avatars/errorEmo.png" alt="Error Img">
                <div class="errorText">"Oops, Something is wrong with my circuits I can't process the command"</br>Please try again later!</div>
            </div>`;
        }

    },

    //Fetches all data from the Quizzes questions json
    fetchQuizzes: async function () {
        try {
            let response = await fetch(`https://raw.githubusercontent.com/sedc-codecademy/sp2021-cp10-dsc/main/JSON/Quizzes.json`);
            let data = await response.json();
            DataService.cachedQuizzes = await data;
        } catch (error) {
            QuizzesService.gamesAndQuizzesWindow.innerHTML =
                `<div id="errorWrapper" class="errorWrapper"> <img src="./CODE/src/img-avatars/quizzesError.png" alt="Error Img">
                <div class="errorText">"Oops, Something is wrong with my circuits I can't process the command"</br>Please try again later!</div>
            </div>`;
        }
    },
};//PROPERTIES: URL for JSON dummy server, Cached Data, Cached ReplyMessages, Cached Quizzes
