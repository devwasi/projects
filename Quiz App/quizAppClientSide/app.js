// to make quiz app with proper ui

var questionData = []
      // quiz attempted by users
      var quizAttempted = document.getElementById("quizAttempted")
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
      // start quiz screen 
      var startQuiz = document.getElementById("startQuiz")

      // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 //  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
  import { getDatabase, ref, onChildAdded, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
 
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBwfuKRbTrR05xFIh3FtlPaMzfOYooZMZ0",
    authDomain: "wasiquiz.firebaseapp.com",
    projectId: "wasiquiz",
    storageBucket: "wasiquiz.appspot.com",
    messagingSenderId: "620472332446",
    appId: "1:620472332446:web:a7de5837c199f6f5c64b8f",
    measurementId: "G-FXWG6SQ5NQ"
  };
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);
  var DATABASE = getDatabase(app);

  function getQuestionDataFromdataBase(){
    var refer = ref(DATABASE,`QuestionsData/`)
  onChildAdded(refer,function(data){
    renderQuestion(data.val())
  })
  }

  // quiz attempted users render
  function quizAttemptedByUsers(){
    var quizAttemptedArray = []
    var refer = ref(DATABASE, `results`)
    onChildAdded(refer, function(results){
      quizAttemptedArray.push(results.val())
      quizAttempted.innerHTML = ""
      for(var i = 0; i<quizAttemptedArray.length; i++){
        quizAttempted.innerHTML += `<tr>
        <td>
        ${i+1}
        </td>
        <td>
        ${quizAttemptedArray[i].name}
        </td>
        <td>
            ${quizAttemptedArray[i].score}%
        </td>
    </tr>`
      }
    })
  }
  window.onload = quizAttemptedByUsers()



      // timer
var timerMin = 4;
var timerSec = 60;
var interval;
var timerMinHeading = document.getElementById("timerMin")
var timerSecHeading = document.getElementById("timerSec")

function timer(){
    timerSec--;
    timerSecHeading.innerHTML = timerSec;
    timerMinHeading.innerHTML = timerMin
    if(timerSec <=0){
        timerMin--;
        timerMinHeading.innerHTML = timerMin;
        timerSec = 60;
    }

}

      var questionIndex = 0;
      var score = 0;
      // first name and last name variable
      var fullName;

      // start quiz
      window.start =function(){
        if(fName.value === "" || lName.value === ""){
          alert("please enter your name")
        }
        else{
          fullName = fName.value + " " + lName.value;
          fName.value = "";
          lName.value = "";
          startQuiz.classList.add("hidden");
          getQuestionDataFromdataBase()
          interval = setInterval(timer,1000);

        }
      }
// render question from array
 function renderQuestion (data){
  if(data){
    // questionData = []
    questionData.push(data)
  }
    if(questionIndex < questionData.length){
      // question  class list remove hide
      // obtScore.classList.add("hidden");
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
    for(var i=0; i<questionData[questionIndex].options.length; i++){
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
window.result = function (){
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
    var result = {
      name: fullName,
      id: Math.floor(Math.random()*100000),
      score: score  /questionData.length  * 100,
    }
  var refer = ref(DATABASE, `results/${result.id}/`)
  set(refer, result)
}
// next question 
window.next = function (){

    questionIndex++;
    // renderQuestion()
    renderQuestion()
}
// check answer wrong or right
window.check = function (userSelection, correctAns){
if(userSelection === correctAns){
    score++
}
next()
}

// test again 

window.again = function (){
  questionData = []
  questionIndex = 0;
  score = 0;
  startQuiz.classList.remove("hidden")
  obtScore.classList.add("hidden")
  questionDisplay.classList.add("hidden")
  
}


