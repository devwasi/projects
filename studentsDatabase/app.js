// student's data management

var stdData = [];
// add std data btn and div 
var addBtn2 = document.getElementById("addBtn")
var addStdDiv = document.getElementById("addStdDiv")
var stdDataBase = document.getElementById("stdDataBase")

// add data to array
function addStd(){
    var inp = document.getElementById("inp")
    var inp2= document.getElementById("inp2")
    var inp3 = document.getElementById("inp3")
    if(inp.value === "" || inp2.value === "" || inp3.value === ""){
        alert("Please fill all the fields")
    }
    else{
    var obj = {
        firstName : inp.value,
        lastName : inp2.value,
        age : inp3.value,
        id : Math.floor(Math.random() * 8000000)
    }
    stdData.push(obj);
    inp.value = "";
    inp2.value = "";
    inp3.value = "";
    addBtn2.classList.remove("hidden")
    addStdDiv.classList.add("hidden")
    stdDataBase.classList.remove("hidden")
    render();
}
}
// render data from array to user screen
function render(){
    var table = document.getElementById("table");
    var ts = document.getElementById("ts")
    ts.innerHTML = stdData.length
    table.innerHTML = `
    <thead>
    <tr>
        <th scope="col">S.No</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">age</th>
        <th scope="col">ID</th>
        <th scope="col">Add/Delete</th>
    </tr>
</thead>
<tbody class="table-group-divider" id="tbody">
                 
                </tbody>`;
                var tbody = document.getElementById("tbody")

    for (var i = 0; i < stdData.length; i++) {
        tbody.innerHTML +=  `<tr>
        <td>${i+1}</td>
        <td>${stdData[i].firstName}</td>
        <td>${stdData[i].lastName}</td>
        <td>${stdData[i].age}</td>
        <td>${stdData[i].id}</td>
        <td><button class="btn btn-primary" onclick="deleteStd(${i})">Delete</button></td>
    </tr>`
    }

}
// delete data of a particuler student
function deleteStd(index){
    stdData.splice(index,1)
    render()
}
// add / cancel button to add data
function addBtn(){
addBtn2.classList.add("hidden")
    addStdDiv.classList.remove("hidden")
    stdDataBase.classList.add("hidden")
}

function cancel(){
    addBtn2.classList.remove("hidden")
    addStdDiv.classList.add("hidden")
    stdDataBase.classList.remove("hidden")
}