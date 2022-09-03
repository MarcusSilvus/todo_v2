
// create empty array for list items
// create input for user to enter item
// create button to push item to array
// display items
// have option to mark item as completed
// move completed items to another array
// display completed items

let items = []
id = 0

const enterKey = document.querySelector("#newItem-el")
const newItemEl = document.getElementById("newItem-el")
const addBtnEl = document.getElementById("addBtn-el")
const todoListEl = document.getElementById("todoList-el")
const removeBtnEl = document.getElementById("removeBtn-el")
//let item = document.getElementById("item")

function arrPush() {
  items.push(newItemEl.value)
  console.log(items)
  render()
  newItemEl.value = ""
  id++
}


addBtnEl.addEventListener("click", function() {
  if(newItemEl.value.trim() != ""){
    arrPush()
  } 
})

enterKey.addEventListener("keyup", (e) => {
  if(newItemEl.value.trim() != ""){
    if (e.keyCode === 13) {
      arrPush()
    }
  }
})

function render() {
  let listItems = ""
  for (let i = 0; i < items.length; i++) {
    listItems += `
        <li id="todoLi">
          <label for="item"> 
            <input type="checkbox" id="li-${items.indexOf(items[i])}" name="item"> ${items[i]} 
          </label>
        </li>
      `
  }
  todoListEl.innerHTML = listItems
}

// when button is pushed, item disappears
removeBtnEl.addEventListener("click", function() {
  
  for (let i = items.length - 1; i >= 0 ; i--) {
    const item = document.querySelector(`#li-${items.indexOf(items[i])}`)

    if (item.checked) { 
      let index = items.indexOf(items[i])
      items.splice(index, 1)
    }  
  }
    
  render() // render to refresh the list 
})

