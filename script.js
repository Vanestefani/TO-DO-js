const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
var todo = [];
function newTodo() {
  let input = prompt("Please , you write the name TODO ");
  todo.push({ id: todo.length + 1, name: input, checked: false });
  contartotal();
  contarunchket();

  let i = todo.length - 1;
  var li = document.createElement("li");
  li.innerHTML =
    "<div " +
    "name=" +
    todo[i].id +
    " id=" +
    todo[i].id +
    " > <input  " +
    "name=check" +
    todo[i].id +
    " id=check" +
    todo[i].id +
    " onclick=fchecked(" +
    i +
    ")  type='checkbox'/>" +
    "<p>" +
    todo[i].name +
    "</p>" +
    "<button onclick=eliminar(" +
    i +
    ")>x</button> </div>";
  list.appendChild(li);
}
function contartotal() {
  return (itemCountSpan.innerHTML = todo.length);
}

function eliminar(id) {
  todo.splice(id, 1);
  contartotal();

  let div = document.getElementById(id + 1);
  let li = div.parentNode;

  list.removeChild(li);
  contarunchket();
}
function fchecked(id) {
  let n = id + 1;
  let div = document.getElementById("check" + n);
  if (todo[id].checked == false) {
    div.checked = true;
    todo[id].checked = true;
  } else {
    div.checked = false;
    todo[id].checked = false;
  }
  contarunchket();
}
function contarunchket() {
  let lista = todo.filter((dato) => dato.checked == false);
  let total = lista.length;
  return (uncheckedCountSpan.innerHTML = total);
}
