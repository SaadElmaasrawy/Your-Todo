let input = document.getElementById("todo");
let btn = document.getElementById("submit");
let todoField = document.getElementById("todoField");
let tmp;
let mood = 'add';

if(localStorage.ourTodoList != null){
    todoList = JSON.parse(localStorage.ourTodoList);
}else{
    todoList = [];
}

//add todo
btn.onclick = function(){
    let todo = {
        todo:input.value
    }
    if(mood == 'add'){
        todoList.push(todo);
        input.value = '';
    }else {
        todoList[tmp] = todo;
        mood = 'add';
        btn.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        input.value = '';
    }
    localStorage.setItem("ourTodoList",JSON.stringify(todoList));
    readTodo();

}

// read todo from array

function readTodo(){
    let todos = '';
    for(let i = 0 ; i < todoList.length ; i++){
        todos += `<div class="todo">
            <p id = "p${i}">${todoList[i].todo}</p>
            <button id="edit" onClick = "edit(${i})"><i class="fa-solid fa-pencil"></i></button>
            <button id="delete" onClick = "deleteTodo(${i})"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
    }
    todoField.innerHTML = todos;

}

readTodo();

//edit function

function edit(i){
    tmp = i;
    mood = 'update';
    btn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    input.value = todoList[i].todo;
}

//delete todo

function deleteTodo(i){
    todoList.splice(i,1);
    localStorage.ourTodoList = JSON.stringify(todoList);
    readTodo();
}

// check

// function check(i){
//     let id = "p"+i;
//     let p = document.getElementById(id);
//     console.log(id);
//     console.log(p.innerText);
//     p.style.textDecorationLine = "line-through";
//     p.style.textDecorationColor = "rgb(142, 194, 255)";
// }
{/* <button id="delete" onClick = "check(${i})"><i class="fa-solid fa-check"></i></button> */}
