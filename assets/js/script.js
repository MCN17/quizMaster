// array of questions
var questions = [
    {
        question: "How many F1 championships does Lewis Hamilton have?",
        choices: ["7", "6", "5", "4", "3"], 
        answer: "7"
    }, 
    {
        question: "Who assisted on Crosby's 'Golden' goal in the 2010 Olympics?", 
        choices: ["Joe Thornton", "Dany Heatley", "Eric Staal", "Mike Richards", "Jerome Iginla"], 
        answer: "Jerome Iginlia"
    }, 
    {
        question: "Which team did Kobe Bryant get 81 points against?", 
        choices: ["Atlanta Hawks", "Indiana Pacers", "Denver Nuggets", "Toronto Raptors", "Utah Jazz"], 
        answer: "Toronto Raptors"
    }, 
    {
        question: "How many F1 championships did Ayrton Senna have?", 
        choices: ["5", "4", "3", "2", "1"], 
        answer: "3"
    }, 
    {
        question: "How many goals did Daniel Alfredsson have in the 2007 NHL playoffs?", 
        choices: ["10", "11", "12", "13", "14", "15"], 
        answer: "14"
    }
];

// Variables
mainContentEl = document.querySelector(".main-content")
// create into paragraph
var homePEl = document.createElement("p");
// create start quiz button
var startBtnEl = document.createElement("button");
// questions
var quizQuestionsEl = document.querySelector(".quiz-questions");

// var to be used for incrementing
var q = 0;
var currentQuestion = 0;
var score = 0;











var displayHomePage = function() {
    // create a heading
    var homeH1El = document.createElement("h1");
    homeH1El.className = "main-h1";
    homeH1El.textContent = "Quiz Master";
    mainContentEl.appendChild(homeH1El);

    // displays opening quiz master intro paragraph
    homePEl.className = "intro-p";
    homePEl.textContent = "Welcome to Quiz Master. These questions will test your knowledge of a few different sports.";
    mainContentEl.appendChild(homePEl);

    //displays start quiz button
    startBtnEl.className = "start-btn";
    startBtnEl.textContent = "Start Quiz";
    mainContentEl.appendChild(startBtnEl);
    


};

var startQuiz = function() {

    homePEl.remove();
    startBtnEl.remove();

    // displays questions
    quizQuestionsEl.textContent = questions[q].question;
    q++;


}

startBtnEl.addEventListener("click", startQuiz);

// display the Home Page
displayHomePage();

// starts the quiz
// startQuiz();