const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; // 항상 비어있기 때문에 submit 할 때 마다 newToDo를 빈 array에 push 하게 됨
function saveToDos() {
    localStorage.setItem("TODOS_KEY",JSON.stringify(toDos));
}
function deleteToDo(event) {
    const li = event.target.parentElement;
    // li 는 우리가 삭제 버튼 누른 toDo
    li.remove();

    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) { // ToDO를 그리는 역할
    const li = document.createElement("li");
    li.id = newTodo.id;
    //li 내부에 span 만들기
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // 입력값을 저장(복사)한 후
    toDoInput.value = ""; // 비운다

    const newTodoObj = {
        text: newTodo,
        id: Date.now() // random 생성
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem("TODOS_KEY");
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 빈 array에 push 하는거 막음
    parsedToDos.forEach(paintToDo);
}

//filter: 지우고 싶은 item 빼고 새 array 만든다.
//true: 유지 false: 제외
 
