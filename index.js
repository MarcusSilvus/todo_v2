
let LIST = [];
let id = 0;

const clear = document.querySelector(".clear");
const enterKey = document.querySelector("plus-btn");

const dateElement = document. getElementById("date");
const list = document.getElementById("list");
const input = doucment.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

function addToDo(toDo, id, done, trash) {

  if(trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE  =  done ? LINE_THROUGH : ""; 

  const text = `<li class="item">
                  <i class="fa ${DONE} complete" job ="complete" id="${id}"></i>
                  <p class="text ${LINE}"> ${toDo} </p>
                  <i class="fa fa-trash-o" job="delete" id="${id}"></i>
                </li>`

  const position = "beforeend";

  list.insertAdjacentElement(position, text);
} 

function completeToDo(element) {
  element.clasList.toggle(CHECK);
  element.clasList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").clasList.toggle(LINE_THROUGH);
  LIST[element.id].done = LIST[element.id].done ? false : true;
}

enterKey.addEventListener("keyup", (e) => {
  if(e.keyCode === 13) {
    const toDo = input.value;
    if(toDo) {
      addToDo(toDo, id, false, false)
      LIST.push(
        {
          name: toDo,
          id: id,
          done: false,
          trash: false
        }
      )
    }
    input.value = "";
    id++;
  }  
});