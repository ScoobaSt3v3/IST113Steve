function addToList() {
  let addTasks = document.getElementById("addTasks");
  let tasks = document.getElementById("tasks");
  let theToDoList = document.getElementById("theToDoList");

  addTasks.addEventListener("click", function() {
    let newListElement = document.createElement("LI");
    let newListItem = document.createTextNode(tasks.value);


    newListElement.appendChild(newListItem);

    newListElement.addEventListener("click", function() {
      this.parentNode.removeChild(this);
  });

  theToDoList.appendChild(newListElement);
});
}
addToList();
