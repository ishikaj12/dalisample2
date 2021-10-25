// marks items as completed
var itemList = document.querySelector("UL");
itemList.addEventListener('click', function(ev) {
    ev.target.classList.toggle('completed');
}, false);

var itemList2 = document.getElementByID("UL2");
itemList2.addEventListener('click', function(ev) {
    ev.target.classList.toggle('completed');
}, false);


// adds new item to to-do list when add button is clicked
function newElement() {
  var newLi = document.createElement("li");

  // save new to do list item as a new text node
  var newToDoItem = document.getElementById("input").value;
  var newItem = document.createTextNode(newToDoItem);

  // add the new item into the list, randomly choose which side of the list
  newLi.appendChild(newItem);
  var num = Math.random()
  if (num >= 0.5) {
    document.getElementById("UL").appendChild(newLi);
  }
  if (num < 0.5) {
    document.getElementById("UL2").appendChild(newLi);
  }

  // reset input value to nothing until new input is entered
  document.getElementById("input").value = "";
}