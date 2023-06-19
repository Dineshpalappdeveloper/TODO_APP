let head1 = document.getElementsByClassName("head1");
let popup = document.getElementsByClassName("addTask");
let popup2 = document.getElementsByClassName("addItem");
let head2 = document.getElementsByClassName("head2");
let head2Text = document.getElementsByClassName("head2Text");
let todo = document.getElementsByClassName("todos");
let todo2 = document.getElementsByClassName("todo2");

function addPopup() {
  head1[0].style.filter = "blur(20px)";
  head2[0].style.filter = "blur(20px)";

  popup[0].style.display = "block";
}

function closeTask() {
  popup[0].style.display = "none";
  head1[0].style.filter = "blur(0px)";
  head2[0].style.filter = "blur(0px)";
}
idCount = 0;
count = 0;
let todoCardId = 0;
let child;
let headChild;
let childMainDiv;
function addTask() {
  idCount++;
  count++;

  let cardTittle = document.querySelector(".cardText").value;
  if (count > 0) {
    let checkItems = document.querySelector(".checkItem");
    checkItems.style.display = "none";
  }

  if (cardTittle) {
    createCard(idCount, cardTittle, count);
  } else {
    alert("Please Give Name to the Todo card");
  }
  closeTask();
  back();
}

function createCard(id, cardTittle, count) {
  let todoDiv = document.createElement("div");
  todoDiv.setAttribute("id", `${id}`);
  let heading = document.createElement("p");
  let button1 = document.createElement("button");
  let button2 = document.createElement("button");

  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", `mainDiv${id}`);
  todo[0].appendChild(todoDiv);
  todoDiv.appendChild(heading);
  todoDiv.append(button1);
  todoDiv.append(button2);
  todoDiv.appendChild(mainDiv);

  heading.innerHTML = `${cardTittle}`;
  button1.innerHTML = "x";
  button2.innerHTML = "+";
  mainDiv.classList.add("mainDiv");
  todoDiv.classList.add("todoscard");
  button1.classList.add("addCardBtn1");
  button2.classList.add("addCardBtn2");
  heading.classList.add("line");

  heading.addEventListener("click", () => {
    head1[0].style.display = "none";
    head2[0].style.display = "block";
    head2Text[0].innerHTML = `${cardTittle}`;
    todoCardId = todoDiv.getAttribute("id");
    headChild = document.getElementById(`${todoCardId}`);
    console.log(headChild);
    todo2[0].appendChild(headChild);
  });

  button1.addEventListener("click", () => {
    count--;
    todoDiv.remove();
    if (count === 0) {
      let checkItems = document.querySelector(".checkItem");
      checkItems.style.display = "block";
    }
  });

  button2.addEventListener("click", () => {
    head1[0].style.filter = "blur(20px)";
    head2[0].style.filter = "blur(20px)";
    popup2[0].style.display = "block";

    todoCardId = todoDiv.getAttribute("id");
    child = document.getElementById(`${todoCardId}`).children;
    childMainDiv = child[3];
  });
}

function closeItem() {
  head1[0].style.filter = "blur(0px)";
  head2[0].style.filter = "blur(0px)";
  popup2[0].style.display = "none";
}

function addItem() {
  popup2[0].style.display = "none";
  head1[0].style.filter = "blur(0px)";
  head2[0].style.filter = "blur(0px)";

  let itemDiv = document.createElement("div");
  let itemText = document.createElement("div");
  let itemButton = document.createElement("button");

  console.log(childMainDiv);
  childMainDiv.appendChild(itemDiv);
  itemDiv.appendChild(itemText);
  itemDiv.appendChild(itemButton);

  itemDiv.classList.add("itemDiv");
  itemText.classList.add("itemText");
  itemButton.classList.add("itemButton");

  let itemInput = document.querySelector(".cardItem").value;
  itemText.innerHTML = `${itemInput}`;
  itemButton.innerHTML = "Done";

  itemButton.addEventListener("click", () => {
    itemText.style.textDecoration = "line-through";
    itemText.style.color = "orange";
    itemButton.style.display = "none";
    itemText.style.marginLeft = "55px";

    itemText.addEventListener("click", () => {
      itemText.style.textDecoration = "none";
      itemText.style.color = "black";
      itemButton.style.display = "block";
      itemText.style.marginLeft = "0px";
    });
  });
}

function back() {
  head1[0].style.display = "block";
  head2[0].style.display = "none";
  todo[0].appendChild(headChild);
}
