var inp = document.getElementById("inp")

var todoList = document.getElementById("todoList")
// array declared to store todo data
var todoData = []

// start screen
var startScreen = document.getElementById("startScreen");
// todo add screen with todo record/ list
var todoAdd = document.getElementById("todoAdd")
// cancel todo button on start screen
var cancelBtnStart = document.getElementById("cancelBtnStart")
// update screen
var updateDataScreen = document.getElementById("updateDataScreen")

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
//  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
 import { getDatabase, ref, set, onChildAdded, update, remove } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
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
 var DATABASE = getDatabase(app);


// render in page
// get data from database and if found some date render it on page
function render(data){
    todoList.innerHTML = "";

    if(data)
    {
        startScreen.classList.add("hidden")
        todoAdd.classList.remove("hidden")
        todoData.push(data)

    } 

    for(var i=0; i<todoData.length;i++){
        todoList.innerHTML += `<li class="liData"> <div class="listDataValue"> ${todoData[i].todo} </div>   <div class="liBtn"><button class="btn" onclick="editTodo(${i}, ${todoData[i].id})"><i class="fa-solid fa-pen fs-1"></i></button> <button class="btn" onclick="deleteTodo(${i}, ${todoData[i].id})"><i class="fa-solid fa-square-minus fs-1"></i></button></div></li>`

    }
}
// add to todo list
window.addTodo = function(){
    if(inp.value === "" && startScreen.classList.contains("hidden")){
        startScreen.classList.remove("hidden")
        todoAdd.classList.add("hidden")
        cancelBtnStart.classList.remove("hidden")
        
    }else
    if(inp.value === ""){
        alert("task is required");  
    } else{
        startScreen.classList.add("hidden")
        todoAdd.classList.remove("hidden");
        // object creation
        var todo = {
            todo: inp.value,
            id: Math.floor(Math.random(6)*1000000),
        }
        // data push in database and local array
        var refer = ref(DATABASE, `todos/${todo.id}/`)
        set(refer, todo)
        inp.value = ""
getDataFromDatabase()    }
    
}

// import data from server 

function getDataFromDatabase(){
    todoData = []
    var reference = ref(DATABASE,'todos/')
    onChildAdded(reference,function(data){
      render(data.val())
    })
  }
  window.onload = getDataFromDatabase()


// edit in current todo task
var todataOld;
window.editTodo = function(indexNum){
    updateDataScreen.classList.remove("hidden")
    todoList.classList.add("hidden")

    updateDataScreen.innerHTML = `<LI class="liData"><div class="listDataValue">
    <input type="text" id="updateInput" >
    <button class="btn" onclick="updateDataInDB(${indexNum})">update</button>
    <button class="btn" onclick="cancel(${indexNum})">cancel</button>
</div></LI>` 
}

window.updateDataInDB = function(indexNum){
// update input
var updateInput = document.getElementById("updateInput")
    if(updateInput.value === ""){
        alert("task can't be empty")
    }
    else{

        var refer = ref(DATABASE, `todos/${todoData[indexNum].id}`);
        update(refer,{
            id: todoData[indexNum].id,
            todo: updateInput.value
        })
        updateDataScreen.classList.add("hidden")
    todoList.classList.remove("hidden")
        getDataFromDatabase()
        // console.log(todoData[indexNum].id)
    }
}

// cancle on editable
window.cancel =function(indexNum){
    updateDataScreen.classList.add("hidden")
    todoList.classList.remove("hidden")
}

// cancel button on add screen
window.cancelBtnSt = function(){
startScreen.classList.add("hidden");
todoAdd.classList.remove("hidden");
render()
}
// delete a todo
window.deleteTodo = function(indexNum,id){
    var refer = ref(DATABASE, `todos/${id}`)
    remove(refer);
    todoData = []
    getDataFromDatabase()
}

// delete all
window.deleteAllData = function (){
    var refer = ref(DATABASE,"todos/")
    remove(refer)
    console.log("first")
}
// getDataFromDatabase()



