const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
//미해결...
const todoList = document.getElementById("todoList");
let toDos = [];

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li);
  console.log(parseInt(li.id));
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;

  const span = document.createElement("span");
  const btn = document.createElement("button");
  //역으로 만들어주기

  li.appendChild(span);
  li.appendChild(btn);

  span.innerText = newToDo.text;
  btn.innerText = "check@";

  todoList.appendChild(li);

  btn.addEventListener("click", deleteToDo);
}

function handleTodolist(e) {
  e.preventDefault();

  const newToDo = todoInput.value;
  console.log(newToDo);

  todoInput.value = " ";

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  //ex) { "1" : "123213"} 한 쌍식 생성

  todoStoreList(newToDoObj);

  paintToDo(newToDoObj);
  console.log(`======paintTOdo 실행! ======`);
}

function todoStoreList(newToDo) {
  toDos.push(newToDo);
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

todoForm.addEventListener("submit", handleTodolist);

const savedToDolist = localStorage.getItem("toDos");
// savedToDolist -> '[' '{'' "1"'/' :'/' "''12334''}' ']'
// localStorage에는 계속 누적돼서 남아있음 (새로고침을 하지 않았다면! + submit만 했을때)
// 새로고침하면 다 날라감

if (savedToDolist !== null) {
  //savedToDolist에 값이 남아있다면

  const parsedTodolist = JSON.parse(savedToDolist);
  //객체화시켰다 -> 배열로 남아있음
  // ==>"배열화"헸다
  // ex) ["1" : "123434"]

  toDos = parsedTodolist;
  //   문제 2)
  //   새로고침하면 이전의 toDo 그려져있다.
  //   하지만 다시 입력하면 localStorage는 초기화가 된다.
  // ' todoStoreList() 에 toDos.push() -> todo 리스트를 localStorage에 저장'
  // => 이유: toDos [] 가 빈 배열로 초기화 되어있기에 이전의 항목들 날라간다.
  // toDos update 가능한 let으로 바꾼후 parsedTolist (localstorage에 저장되어있는 항목들)을 저장한다.

  parsedTodolist.forEach(paintToDo);
  //localstorge에는 toDo가 남아있지만 , 새로고침하면 paintTodo로 그린 애들 증발
  // 보이지않음 새로고침해도 남아있게 parsedTodolist 배열에 있는 애들 다 그려줌
  //= localstorage에 저장되어있는 투두리스트 item 다 꺼내서 그려줌 -> 다시 그려줌
}

console.log(toDos);
