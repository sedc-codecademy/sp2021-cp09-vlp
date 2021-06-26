const QuizzesService = {
    form: document.querySelector("#questionsForm"),
    gamesAndQuizzesWindow: document.getElementById("gamesAndQuizzesWindow"),
    popUpQuizzes: document.getElementById("popUpQuizzes"),
    areQuizzesOpen: false,
    displayedQuestions: null,

    //Prints buttons for all the quizzes
    printQuizzesMenu: function () {
        AnimationsService.chatQuizzes.addEventListener('click', function () {
            UiService.disableGamesAndQuizzesButtons(true);
            QuizzesService.areQuizzesOpen = UiService.changeFlag(QuizzesService.areQuizzesOpen);

            if (!AnimationsService.isChatInitialized) {
                AnimationsService.headerAnimation();
                AnimationsService.chatQuizzes.addEventListener("animationend", function () {
                    UiService.changeQuizzesGamesIconAndFunctionality(QuizzesService.areQuizzesOpen, AnimationsService.chatQuizzes, QuizzesService.gamesAndQuizzesWindow);
                });
            } else {
                UiService.changeQuizzesGamesIconAndFunctionality(QuizzesService.areQuizzesOpen, AnimationsService.chatQuizzes, QuizzesService.gamesAndQuizzesWindow);
            }

            if(DataService.cachedQuizzes === null) {
                UiService.disableGamesAndQuizzesButtons(false);
                return;
            }

            let inner = `<p id="quizesMessage">Choose a Quiz</p> <hr class="chat-js-hr">`;

            inner += `<div id="twoRowBtnDiv" class="twoRowBtnFlex">`;

            for (let quiz in DataService.cachedQuizzes) {
                inner +=
                    `<button id="${quiz}" class="btnCard" onclick="QuizzesService.getQuiz('${quiz}')">
                        <div class="btnCardName">${QuizzesService.fixQuizName(quiz)}</div>
                        <div class="btnCardDescription">Description</div>
                    </button>`;
            }
            inner += `</div>`
            QuizzesService.gamesAndQuizzesWindow.innerHTML = inner;
            UiService.disableGamesAndQuizzesButtons(false);
        });
    },

    //Fixes the name (json id)
    fixQuizName: function (input) {
        let name = "";
        for(let char of input){
            if(char === "-"){
                name += " ";
            }else{
                name += char;
            }
        }
        return name;
    },

    //Prints the chosen quiz from JSON
    getQuiz: function (id) {
        let data = DataService.cachedQuizzes[id];

        UiService.displayModalWindow("quizzes");
        if (data === undefined) {
            QuizzesService.somethingWentWrong();
            return;
        }

        QuizzesService.chooseRandomQuestions(data);
    },

    // Chooses 15 random questions from 30 questions for each quiz
    chooseRandomQuestions: function (data) {
        let randomQuestions = [];

        for (let i = 0; i < 15; i++) {
            let index = Math.floor(Math.random() * data.length);
            if (randomQuestions.includes(data[index])) {
                i--;
                continue;
            } else {
                randomQuestions.push(data[index]);
            }
        }

        QuizzesService.renderQuestions(randomQuestions);
    },

    //Renders chosen random questions in pop-up window
    renderQuestions: function (questions) {
        this.displayedQuestions = questions;
        QuizzesService.form.innerHTML = "";

        let inner = '';
        for (let i = 0; i < questions.length; i++) {
            inner += `
            <div class="quizQuestion">
                <p><b>${i + 1}. ${questions[i].question}</b></p>
                <div class="form-check">
                    <input type="radio" class="radio" name="q${i + 1}" value="A" id="first${i}">
                    <label for="first${i}" class="form-check-label">${questions[i].answer1}</label>
                </div>
                <div class="form-check">
                    <input type="radio" class="radio" name="q${i + 1}" value="B" id="second${i}">
                    <label for="second${i}" class="form-check-label">${questions[i].answer2}</label>
                </div>
                <div class="form-check">
                    <input type="radio" class="radio" name="q${i + 1}" value="C" id="third${i}">
                    <label for="third${i}" class="form-check-label">${questions[i].answer3}</label>
                </div>
                <div class="form-check">
                    <input type="radio" class="radio" name="q${i + 1}" value="D" id="fourth${i}">
                    <label for="fourth${i}" class="form-check-label">${questions[i].answer4}</label>
                </div>
            </div>
            <hr class="quiz-hr">`;
        }
        inner += `<button type="submit" id="submitBtn">Submit</button>`;
        QuizzesService.form.innerHTML = inner;
    },

    //Checks which question's answers are correct
    checkRightAnswers: function (event) {
        event.preventDefault();

        let userAnswers = [QuizzesService.form.q1.value, QuizzesService.form.q2.value, QuizzesService.form.q3.value, QuizzesService.form.q4.value, QuizzesService.form.q5.value, QuizzesService.form.q6.value, QuizzesService.form.q7.value, QuizzesService.form.q8.value, QuizzesService.form.q9.value, QuizzesService.form.q10.value, QuizzesService.form.q11.value, QuizzesService.form.q12.value, QuizzesService.form.q13.value, QuizzesService.form.q14.value, QuizzesService.form.q15.value];

        const empty = (x) => x === "";
        if (userAnswers.some(empty)) {
            QuizzesService.form.innerHTML = '<p class="somethingWentWrongMessage">All the questions must be answered before you submit them! <br><br>Please try again!</p>';
            return;
        }

        let score = 0;
        userAnswers.forEach((answer, i) => {
            if (answer === QuizzesService.displayedQuestions[i].correctAnswer) {
                score += 6.66666;
            }
        });

        QuizzesService.form.innerHTML = `<p id="quizResult">You got <span id="quizSpan" >${Math.ceil(score)}%</span> of the questions right!</p>`;
    },

    //Prints a message if something is wrong with the quiz
    somethingWentWrong: function () {
        UiService.displayModalWindow("quizzes");
        QuizzesService.form.innerHTML = `<p class="somethingWentWrongMessage">Something went wrong! <br>Please try again later!</p>`
    }
};//PROPERTIES: Form for the quizzes, Games and Quizzes main menu display, Pop up for the quizzes modal, Bool if the quizzes ate open, Displayed question array