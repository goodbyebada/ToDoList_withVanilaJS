const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
//미해결...
const todoList = document.getElementById("todoList");
let toDos = [];

// function removeBtn(event) {
//   const li = event.composedPath()[1];
//   toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
//   li.remove();

//   todoStoreList();
// }

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // saveToDos();
}

// function paintToDo(newToDo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   const btn = document.createElement("button");
//   //역으로 만들어주기
//   li.appendChild(span);
//   li.appendChild(btn);

//   span.innerText = newToDo.text;
//   btn.innerText = "❎";

//   btn.addEventListener("click", removeBtn);
//   //혹시 순서가 상관이 있을까? -> 상관없음
//   //이미 들어가 있는 상태로 innerText가 생기는거니까
//   todoList.appendChild(li);

//   console.log(`log ${newToDo.text}`);
// }

function paintToDo(newTodo) {
  const li = document.createElement("li");
  // li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodolist(e) {
  e.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  todoStoreList(newToDoObj);

  paintTodo(newToDoObj);
}

function todoStoreList(newToDo) {
  toDos.push(newToDo);
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

todoForm.addEventListener("submit", handleTodolist);

const savedToDolist = localStorage.getItem("toDos");

if (savedToDolist !== null) {
  const parsedTodolist = JSON.parse(savedToDolist);
  //객체화시킨것임 -> 배열로 남아있다

  toDos = parsedTodolist;
  //   문제 2)
  //   새로고침하면 이전의 toDo 그려져있다.
  //   하지만 다시 입력하면 localStorage는 초기화가 된다.
  // => 이유: toDos [] 가 빈 배열로 초기화 되어있기에 이전의 항목들 날라간다.
  // toDos update 가능한 let으로 바꾼후 parsedTolist (localstorage에 저장되어있는 항목들)을 저장한다.

  parsedTodolist.forEach(paintToDo);
  //localstorge에는 toDo가 남아있지만 , 새로고침하면 paintTodo로 그린 애들 증발
  // 보이지않음 새로고침해도 남아있게 parsedTodolist 배열에 있는 애들 다 그려줌
  //= localstorage에 저장되어있는 투두리스트 item 다 꺼내서 그려줌
}

// function limitTodolist(newToDo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   li.appendChild(span);
//   span.innerText = newToDo;
//   todoList.appendChild(li);
//   listCount.push(newToDo);
//   //   console.log(listCount);
//   //   console.log(listCount.length);
// }

// function deleteToDo(event) {
//     const li = event.target.parentElement;
//     console.log(li.id);
//     li.remove();
//     toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
//     saveToDos();
//   }
