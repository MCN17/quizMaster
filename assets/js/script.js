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
        answer: "Jerome Iginla"
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
        choices: ["11", "12", "13", "14", "15"], 
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
// choices
var choicesEl = document.querySelector(".choices")
// create ul for choices
var choicesUlEl = document.createElement("ul");
// answers
var answersEl = document.querySelector(".answer");
//timer
var quizTimerEl = document.querySelector(".timer");





// var to be used for incrementing
var q = 0;
var currentQuestion = 0;
var questionCounter = 0;
var score = 0;
var startTime = 100;
// var quizTime;











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

// starts Quiz
var startQuiz = function() {
    console.log(questions)
    homePEl.remove();
    startBtnEl.remove();

    // displays questions
    if ( q < questions.length) {
        quizQuestionsEl.textContent = questions[q].question;
    };
    displayChoices();
    

    // currentQuestion = questions[questionCounter];
    // console.log(currentQuestion);
}

// starts the quiz and displays the timer
startBtnEl.addEventListener("click", function() {
    startQuiz();
    startTimer();
});

// display choices
var displayChoices = function() {
    for (var i = 0; i < questions[q].choices.length; i++) {
        var quizChoicesEl = document.createElement("li");
        quizChoicesEl.setAttribute("class", "choice-list-items")
        quizChoicesEl.textContent = questions[q].choices[i];
        // quizChoicesEl.id = i; 
        choicesEl.appendChild(choicesUlEl);
        choicesUlEl.appendChild(quizChoicesEl);  
    }
    q++;
}

// clicking one of the answers then displays correct/incorrect and then will display the next set of questions/choices
choicesUlEl.addEventListener("click", displayAnswer);

// displays whether answer is correct or incorrect
function displayAnswer(event) {
    console.log(event.target.textContent);
    var answerP = document.createElement("p");
    answerP.setAttribute("class", "answer-p");
    answersEl.appendChild(answerP);
    if (questions[currentQuestion].answer === event.target.textContent) {
        answerP.textContent = "Niiice!";
    } else {
        answerP.textContent = "Nope!";
    };

    setTimeout(function() {
        removeChoices();
        removeAnswer();
        startQuiz();
        
    }, 1500)
    currentQuestion++;
    
};

// creates/displays/starts timer once start button is clicked
var startTimer = function() {
    
    var timerEl = document.createElement("p");
    timerEl.textContent = startTime;
    quizTimerEl.appendChild(timerEl);
    quizTime = setInterval(function(){
        if (startTime > 0) {
            startTime--;
            timerEl.textContent = startTime;
        } else {
            clearInterval(quizTime);
        }
    }, 1000)
    console.log(quizTime);
}

// remove last set of choices
var removeChoices = function() {
    choicesUlEl.innerHTML = "";
}

// remove correct/incorrect
var removeAnswer = function() {
    answersEl.innerHTML="";
}

// display the Home Page
displayHomePage();


// starts the quiz
// startQuiz();