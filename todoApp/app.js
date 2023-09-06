var inp = document.getElementById("inp")

var todoList = document.getElementById("todoList")
// array declared to store todo data
var todoData = ["dsj","lkf","jlk"]

// start screen
var startScreen = document.getElementById("startScreen");
// todo add screen with todo record/ list
var todoAdd = document.getElementById("todoAdd")
// cancel todo button on start screen
var cancelBtnStart = document.getElementById("cancelBtnStart")

// render in page
function render(dltAll){
    todoList.innerHTML = ""
    if(dltAll)
    {
        todoData = []
        startScreen.classList.remove("hidden")
        todoAdd.classList.add("hidden")
        return
    }
    for(var i=0; i<todoData.length;i++){
        todoList.innerHTML += `<li class="liData"> <div class="listDataValue"> ${todoData[i]} </div>   <div class="liBtn"><button class="btn" onclick="editTodo(${i})"><i class="fa-solid fa-pen fs-1"></i></button> <button class="btn" onclick="deleteTodo(${i})"><i class="fa-solid fa-square-minus fs-1"></i></button></div></li>`
    }
}
// add to todo list
function addTodo(){
 
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
        todoData.push(inp.value)
        inp.value = ""
        render();
    }
   
}
// edit in current todo task
var todataOld;
function editTodo(indexNum){
    todataOld = todoData[indexNum]

    todoData[indexNum] = todoData[indexNum].innerHTML = `<div><input id="updateInp"/> <button class="btn" onclick="update(${indexNum})"><i class="fa-solid fa-pen-to-square fa-2xl"></i></button> <button class="btn" onclick="cancel(${indexNum})"><i class="fa-solid fa-xmark fa-xl"></i></button> </div>`
    render()

    
    
}

function update(indexNum){
    var updateInp = document.getElementById("updateInp")
    if(updateInp.value === ""){
        alert("task can't be empty")
    }
    else{
        todoData[indexNum] = updateInp.value;
        render()
    }
}

// cancle on editable
function cancel(indexNum){
    todoData[indexNum] =  todataOld;
    render()
}

// cancel button on add screen
function cancelBtnSt(){
startScreen.classList.add("hidden");
render()
todoAdd.classList.remove("hidden");
}
// delete a todo
function deleteTodo(indexNum){
    todoData.splice(indexNum, 1)
    render()
}

render()




