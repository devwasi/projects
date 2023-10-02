// user Sign Up details
var userSignupEmail = document.getElementById("userSignupEmail")
var userSignupPassword = document.getElementById("userSignupPassword")
var signUpError = document.getElementById("signUpError")
// user Login details
var userLoginEmail = document.getElementById("userLoginEmail")
var userLoginPassword = document.getElementById("userLoginPassword")
var loginError = document.getElementById("loginError")


 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
    apiKey: "AIzaSyBOGxf5PumORAMdXrA00WuzpSPh0L_qBzA",
    authDomain: "wasitodoapp.firebaseapp.com",
    projectId: "wasitodoapp",
    storageBucket: "wasitodoapp.appspot.com",
    messagingSenderId: "1073376928737",
    appId: "1:1073376928737:web:ef1a315bf92debe6aae8a0",
    measurementId: "G-B4LGP71SDW"
  };

 // Initialize Firebase
 var app = initializeApp(firebaseConfig);
 var Auth = getAuth(app)

 // sign up users
 window.userSignupToApp = function(){
    signUpError.innerHTML = ""
    createUserWithEmailAndPassword(Auth,userSignupEmail.value, userSignupPassword.value).then(function(userCredentials){

        window.location.replace("../index.html")
    }).catch(function(error){
        signUpError.innerHTML = `<p class="text-danger">${error.code}</p>`
    })
 }
 // user Login to app
 window.userLoginToApp = function(){
    signInWithEmailAndPassword(Auth,userLoginEmail.value, userLoginPassword.value).then(function(success){
        window.location.replace("./pages/todoAdd.html");        
    }).catch(function(error){
        loginError.innerHTML = `<p class="text-danger">${error.code}</p>`
    })
 }