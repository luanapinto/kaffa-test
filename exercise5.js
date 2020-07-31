var task = "";
var countId = 0;
var list = [];

$(document).ready(function(){
    initializer();
});

function initializer(){
    var arrayTasks = [];
    for(i=0;i<localStorage.length; i++){
        taskKey = localStorage.key(i);
        if(taskKey.includes("task ")){
            arrayTasks[i] = JSON.parse(localStorage.getItem(taskKey));
        }
    }
    localStorage.clear();

    for(i=0;i<arrayTasks.length; i++){
        if(!arrayTasks[i].done){
            var taskList = {
                task: arrayTasks[i].task,
                done: false
            };
            localStorage.setItem("task " + countId, JSON.stringify(taskList));
        
            $(".todo").append(
                '<table class="'+countId+'"><tr>'
                    +'<td id="columnCheck"><input type="checkbox" id="'+ countId +'" onclick="taskDone(' + countId + ')" value="'+task.value+'"></td>'
                    + '<td id="columnText">' + arrayTasks[i].task + '</td>'
                    +'<td id="columnDelete"> <i class="fa fa-trash" onclick="deleteTask(' + countId + ')"></i></td>'
                +'</tr></table>');
            countId++;
        }
        else{
            var taskList = {
                task: arrayTasks[i].task,
                done: true
            };
            localStorage.setItem("task " + countId, JSON.stringify(taskList));

            $(".done").append(
                '<table class="'+countId+'"><tr>'
                    +'<td id="columnCheck"><input type="checkbox" id="'+ countId +'" onclick="taskTodo('+ countId +')" value="'+task.value+'" checked></td>'
                    + '<td id="columnText">' + arrayTasks[i].task + '</td>'
                    +'<td id="columnDelete"> <i class="fa fa-trash" onclick="deleteTask(' + countId + ')"></i></td>'
                +'</tr></table>');
            countId++;
        }
    }

}

function addTask(){
    task = document.getElementById("newTask");

    var taskList = {
        task: task.value,
        done: false
    };
    localStorage.setItem("task " + countId, JSON.stringify(taskList));

    if(task.value != ""){
        $(".todo").append(
            '<table class="'+countId+'"><tr>'
                +'<td id="columnCheck"><input type="checkbox" id="'+ countId +'" onclick="taskDone(' + countId + ')" value="'+task.value+'"></td>'
                + '<td id="columnText">' + task.value + '</td>'
                +'<td id="columnDelete"> <i class="fa fa-trash" onclick="deleteTask(' + countId + ')"></i></td>'
            +'</tr></table>');
        document.getElementById("newTask").value = "";
        countId++;
    }
}

function taskDone(id){
    task = document.getElementById(id);

    var taskList = {
        task: task.value,
        done: true
    };
    localStorage.setItem("task " + countId, JSON.stringify(taskList));

    $(".done").append(
        '<table class="'+countId+'"><tr>'
            +'<td id="columnCheck"><input type="checkbox" id="'+ countId +'" onclick="taskTodo('+ countId +')" value="'+task.value+'" checked></td>'
            + '<td id="columnText">' + task.value + '</td>'
            +'<td id="columnDelete"> <i class="fa fa-trash" onclick="deleteTask(' + countId + ')"></i></td>'
        +'</tr></table>');
    $("."+ id).remove();
    window.localStorage.removeItem("task " + id);
    countId++;
}

function taskTodo(id){
    task = document.getElementById(id);

    var taskList = {
        task: task.value,
        done: false
    };
    localStorage.setItem("task " + countId, JSON.stringify(taskList));

    $(".todo").append(
        '<table class="'+countId+'"><tr>'
            +'<td id="columnCheck"><input type="checkbox" id="'+ countId +'" onclick="taskDone(' + countId + ')" value="'+task.value+'"></td>'
            + '<td id="columnText">' + task.value + '</td>'
            +'<td id="columnDelete"> <i class="fa fa-trash" onclick="deleteTask(' + countId + ')"></i></td>'
        +'</tr></table>');
    $("."+ id).remove();
    window.localStorage.removeItem("task " + id);
    countId++;
}

function deleteTask(id){
    $("."+ id).remove();
    window.localStorage.removeItem("task " + id);
}