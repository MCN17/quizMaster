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










var displayHomePage = function() {
    // create a heading
    var homePageH1El = document.createElement("h1");
    homePageH1El.className = "main-h1";
    homePageH1El.textContent = "Welcome to Quiz Master!";
    mainContentEl.appendChild(homePageH1El);

    // create opening quiz master intro paragraph
    var homePEl = document.createElement("p");
    homePEl.className = "intro-p";
    homePEl.textContent = "Welcome to Quiz Master. These questions will test your knowledge of a few different sports.";
    mainContentEl.appendChild(homePEl);
    


};

// display the Home Page
displayHomePage();