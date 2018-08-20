/*
 Let's experiment with creating and manipulating DOM nodes
*/
function testDom() {

  let buttonElement = document.getElementById("buttonElement");
  let buttonSwap = document.getElementById("buttonSwap");
  let listOne = document.getElementById("listOne");
  let listTwo = document.getElementById("listTwo");
  let inputClass = document.getElementById("inputClass");
  let inputContent = document.getElementById("inputContent");

  // We'll add a listener to our create element button
  buttonElement.addEventListener("click", function() {

    // first we'll create a list element and text node
    let newElem = document.createElement("LI");
    let newContent = document.createTextNode(inputContent.value);

    // we'll add the text node as a child to our new element
    newElem.appendChild(newContent);

    // we can add click listeners as well
    // in this case, we're going to make each new item removable
    newElem.addEventListener("click", function() {
      this.parentNode.removeChild(this);
    });

    // then we can add a class
    newElem.classList.add(inputClass.value);

    // we have an element, but it isn't part of the DOM yet.
    // For now, we'll append it to the end of our page div
    listOne.appendChild(newElem);
  });

  // We'll add a listener to our swap button
  buttonSwap.addEventListener("click", function() {
    // first we'll grab the last child of list one
    let lastListOneItem = listOne.lastChild;

    // now we can append it to list two
    listTwo.appendChild(lastListOneItem);
  });
}

testDom();
