// to make quiz app with proper ui



    var questionData = [
        //QUESTIONS ARRAY
        {
          question: "What is the Full Form Of HTML",
          options: [
            "HyperText Makeup Language",
            "HyperText Markup Language",
            "HyperText Markup Lame",
            "HyperTate Markup Language",
          ],
          answer: "HyperText Markup Language",
        },
        {
          question: "What does CSS stands for?",
          answer: "Cascading Style Sheet",
          options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet",
          ],
        },
        {
          question: "What does PHP stands for?",
          answer: "Hypertext Preprocessor",
          options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor",
          ],
        },
        {
          question: "What does SQL stands for?",
          answer: "Structured Query Language",
          options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language",
          ],
        },
        {
          question: "What year was JavaScript launched?",
          answer: "1995",
          options: ["1996", "1995", "1994", "None of the Above"],
        },
      ];

      // question 
      var question = document.getElementById("question");
      // options
      var options = document.getElementById("options");
      // question number
      var questionNum = document.getElementById("questionNum");
      // score
      var obtScore = document.getElementById("obtScore");
      // question display
      var questionDisplay = document.getElementById("questionDisplay");
      // progress
      var progress = document.getElementById("progress")
      // first name and last name
      var fName = document.getElementById("fName");
      var lName = document.getElementById("lName");

      // timer
var timerMin = 4;
var timerSec = 60;
var interval;
var timerMinHeading = document.getElementById("timerMin")
var timerSecHeading = document.getElementById("timerSec")

function timer(){
    timerSec--;
    timerSecHeading.innerHTML = timerSec;
    timerMinHeading.innerHTML = "04"
    if(timerSec <=0){
        timerMin--;
        timerMinHeading.innerHTML = timerMin;
        timerSec = 60;
    }

}
   interval = setInterval(timer,1000);

      var questionIndex = 0;
      var score = 0;
      // first name and last name variable
      var fullName;

      // start quiz
      function start(){
        if(fName.value === "" || lName.value === ""){
          alert("please enter your name")
        }
        else{
          fullName = fName.value + " " + lName.value
          renderQuestion()
        }
      }
// render question from array
function renderQuestion(){
   if(questionIndex < questionData.length){
      // question  class list remove hide
      obtScore.classList.add("hidden");
      questionDisplay.classList.remove("hidden")
       // question number 
       questionNum.innerHTML = `
       Question ${questionIndex+1} / ${questionData.length}`;
       // progress bar
       progress.innerHTML = `
       <div class="progress-bar bg-danger"  style="width:${(questionIndex+1) / questionData.length * 100}%"></div>
       `
    // question data
    question.innerHTML = questionData[questionIndex].question;
    options.innerHTML = ""
    // options data
    for(i=0; i<questionData[questionIndex].options.length; i++){
        options.innerHTML += `
        <div class="d-grid my-2">
        <button class="btn shadow-lg fixHeight" onclick="check('${questionData[questionIndex].options[i]}','${questionData[questionIndex].answer}')">${questionData[questionIndex].options[i]}</button>
    </div>`
    }
   }
   else{
   result()
   }

}

// rsult
function result(){
  // hide question section
    questionDisplay.classList.add("hidden");
      obtScore.classList.remove("hidden")
    obtScore.innerHTML = `
    <div>
    <div class="text-center">
        <h2> Result </h2>
        <hr />
    </div>
    <!-- user data -->
    <div class="text-center">
    <div >
        <h2>
            Congratulations
        </h2>
    </div>
    <div class="my-5">
        <h3>
            ${fullName}
        </h3>
    </div>
    </div>
    <div class="p-2 m-2">
        <h4>
            Your score : ${score}
        </h4>
    </div>
    <div class="p-2 m-2">
        <h4>
            you got : ${score /questionData.length  * 100} %
        </h4>
    </div>
    <div class="text-end mt-5">
        <button class="btn btn-primary" onclick="again()">Test Again</button>
    </div>
</div>
    `
}
// next question 
function next(){

    questionIndex++;
    renderQuestion()
}
// check answer wrong or right
function check(userSelection, correctAns){
if(userSelection === correctAns){
    score++
}
next()
}

// test again 

function again(){
  window.location.reload()
}


