var tasktInput=document.getElementById("taskInput");
var btnAdd=document.getElementById("btnAdd");
var btnEdit=document.getElementById("btnEdit");
var tasksTable=document.getElementById("tBody")
var fix;
var tasks=[];
if(localStorage.getItem("taskslist")){
    tasks=JSON.parse(localStorage.getItem("taskslist"))
    display()
}

// addTask

function addTask(){
    if(validation()==true){
    // creat task
    var task={
        subjectTask:tasktInput.value
    };
    tasks.push(task)
    // set task at localstorage
    localStorage.setItem("taskslist",JSON.stringify(tasks))
    // display list for user
    display()
    // claer input
    clear()
    }
    else{
        alert("write your task")
    }

}




// displayTaskForUser

function display(){
    var values=Object.values(tasks[0])
    for(var i=0;i<tasks.length;i++){
       var tr= tbody.insertRow();
       for(var j=0;j<values.length;j++){
        var td=tr.insertCell()
        var td_1=tr.insertCell()
        var td_2=tr.insertCell()
        td.innerText=values[j];
        td_1.innerHTML=`<input type="button" class=" border-0  Btn btn-outline-success  btncolor "value="Edit"  onclick="editTask(${i})"></input>`
        td_2.innerHTML=`<input type="button" class=" border-0  Btn  btn-outline-danger "value="Delete"  onclick="deleteTask(${i})"></input>`
        tr.setAttribute("class","row")
        td.setAttribute("class","col-8")
        td_1.setAttribute("class","col-2")
        td_2.setAttribute("class","col-2")
       }
       
    }
}

// clear


function clear(){
    tasktInput.value=""
}


// delete task from table

function deleteTask (index){
tasks.splice(index,1)
localStorage.setItem("taskslist",JSON.stringify(tasks))
display()
}


// edit task


 function editTask(index){
 fix=index;
 tasktInput.value=tasks[index].subjectTask;
 btnAdd.classList.replace('d-block','d-none')
 btnEdit.classList.replace('d-none','d-block')

 }


//  display edit task


  function displayEdit(){
    tasks[fix].subjectTask=tasktInput.value
    localStorage.setItem("taskslist" ,JSON.stringify(tasks));
      var container=``;
    for(var i=0;i<tasks.length;i++){
        container+=`
       <tr class="row">
            <td class="col-8">${tasks[fix].subjectTask}</td>
            <td class="col-2"><button  class=" border-0 Btn btn-outline-success "  onclick="editTask(${i})"></button></td>
            <td class="col-2"><button  class=" border-0 Btn btn-outline-danger " onclick="deleteTask(${i})"></button></td>
        </tr>
        `
    }

display()
clear()
  }






//  validation
function validation(){
    if(tasktInput.value!==""){
        return true
    }else{
        return false
    }
}
