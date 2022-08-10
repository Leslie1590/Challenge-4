var questionsEl = document.querySelector("#page-content");
var answersEl = document.querySelector("#answer-button");
var TimerEl = document.querySelector("#timer");
var button1El = document.querySelector("#answer1");
var button2El = document.querySelector("#answer2");
var button3El = document.querySelector("answer3");



//start game
window.alert("Click OK to start the quiz!");

//questions array
var questionsArray =[
    {
        question1: "Some nerdy question here?",
        answers: ["answer 1", "answer2", "answer3"]
    },

    {
        question2: "Question two is not so nerdy?",
        answers: ["answer1", "answer2", "answer3"]
    },
    {
        question3: "Question three is completely out of left field?",
        answer: ["answer1", "answer2", "answer3"]
    }
    
]

//question 1 function
function questionNumberOne(){
    button1.addEventListener("click", "")
    button2.addEventListener("click", "")
    button3.addEventListener("click", "")


    
};

//question 2 function

function questionNumberTwo(){
  button1.addEventListener("click", "")
  button2.addEventListener("click", "")
  button3.addEventListener("click", "")


  
};



//question 3 function

function questionNumberThree(){
  button1.addEventListener("click", "")
  button2.addEventListener("click", "")
  button3.addEventListener("click", "")


  
};



//timer function

function countdown() {
    var timeLeft = 120;
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      }
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } 
      else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }

//move on to the next function

questionNumberOne ();
questionNumberTwo ();
questionNumberThree ();


// save to local storage

var saveQuiz = function() {
  localStorage.setItem("quiz", JSON.stringify(quiz));
  console.log();
}