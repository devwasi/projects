// admin login email
var adminEmail = document.getElementById("adminEmail");
// admin password
var adminPasword = document.getElementById("adminPasword");
// error message display on login screen
var errorMsgDisplay = document.getElementById("errorMsgDisplay");

// question data added by admin in database 
var questionAddByAdmin = document.getElementById("questionAddByAdmin")
// options A
var option1AddByAdmin = document.getElementById("option1AddByAdmin")
// options B
var option2AddByAdmin = document.getElementById("option2AddByAdmin")
// options C
var option3AddByAdmin = document.getElementById("option3AddByAdmin")
// options D
var option4AddByAdmin = document.getElementById("option4AddByAdmin")
// answer 
var answerAddByAdmin = document.getElementById("answerAddByAdmin")



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword , onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
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
var Auth = getAuth(app);
// Initialize Realtime Database and get a reference to the service
var DATABASE = getDatabase(app);


// Login Admin to admin panel

window.AdminLoginToQuizApp = function (){
    // firebase signin auth
    signInWithEmailAndPassword(Auth, adminEmail.value, adminPasword.value).then(function(userCredentials){
        if(userCredentials){
            console.log("first")
            window.location.assign("./pages/addQuestion.html")
            adminEmail.value = ""
            adminPasword.value = ""
        }
        }).catch(function(error){
            console.log(error)
            var errorMsg = error.code;
            if(errorMsg === "auth/invalid-login-credentials"){
                
                errorMsgDisplay.innerHTML = `<p class="text-danger">invalid email or password</p>`;
            }
            
        })
}

// add question to database

window.AddQuestionToDatabase = function(){
    var data = {
        question: questionAddByAdmin.value,
        options:[
            option1AddByAdmin.value,
            option2AddByAdmin.value,
            option3AddByAdmin.value,
            option4AddByAdmin.value
        ],
        answer: answerAddByAdmin.value,
        id: Math.floor(Math.random()*1000000)
    }

    // add data to database
    var refer = ref(DATABASE, `QuestionsData/${data.id}`)
    set(refer, data)
// empty input after setting in db
    questionAddByAdmin.value = "";
    option1AddByAdmin.value = ""
    option2AddByAdmin.value = ""
    option3AddByAdmin.value = ""
    option4AddByAdmin.value = ""
    answerAddByAdmin.value = ""
}

window.signOutUser = function(){
    signOut(Auth).then(function(){
        window.location.replace("../index.html")
    }).catch(function(error){
        console.log(error)
    })
}




