
list = []

const clear = document.querySelector(".clear")
const enterKey = document.querySelector("plus-btn")

const dateElement = document. getElementById("date")
const list = document.getElementById("list")
const input = doucment.getElementById("input")

function addToDo(toDo) {
  const text = `<li class="item">
                  <i class="fa fa-circle-thin" job ="complete"></i>
                  <p class="text"> ${toDo} </p>
                  <i class="fa fa-trash-o" job="delete"></i>
                </li>`

  const position = "beforeend"

  list.insertAdjacentElement(position, text)
} 

enterKey.addEventListener("keyup", (e) => {
  if(e.keyCode === 13) {
    const toDo = input.value;
    if(toDo) {
      addToDo(toDo)
    }
    input.value = ""
  }  
})