
let LIST = [];
let id = 0;

const enterKey = document.querySelector("#plus-btn");

const clear = document.querySelector(".clear");
const dateElement = document. getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Display the date
const options = {weekday: 'long', month: 'short', day: 'numeric'};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// get item from local storage
let data = localStorage.getItem("TODO")
//let variable = localStorage.setItem('key');

if(data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadToDo(LIST);
} else {
  LIST = [];
  id = 0;
}


function addToDo(toDo, id, done, trash) {

  if(trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE  =  done ? LINE_THROUGH : ""; 

  const item = `<li class="item">
                  <i class="fa ${DONE} complete" job ="complete" id="${id}"></i>
                  <p class="text ${LINE}"> ${toDo} </p>
                  <i class="fa fa-trash-o" job="delete" id="${id}"></i>
                </li>`

  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
} 

function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}

enterKey.addEventListener("keyup", (e) => {
  if(e.keyCode === 13) {
    const toDo = input.value;
    console.log("ENTER")
    if(toDo) {
      addToDo(toDo, id, false, false)
      LIST.push({
          name: toDo,
          id: id,
          done: false,
          trash: false
        });
    }
    localStorage.setItem("TODO", JSON.stringify(LIST)); // add item to local storage
    id++;
  }  
  input.value = "";
});

function loadToDo(array) {
  array.forEach(function(item) {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

list.addEventListener("click", function(event) {
  let element = event.target; // returns the clicked element in the list
  const elementJOB = element.attributes.job.value; // complete or delete 
  if(elementJOB == "complete") {
    completeToDo(element);
  } else if(elementJOB == "delete") {
    removeToDo(element)
  }
  localStorage.setItem("TODO", JSON.stringify(LIST)); // add item to local storage
})

clear.addEventListener("click", function() {
  localStorage.clear();
  location.reload();
});
