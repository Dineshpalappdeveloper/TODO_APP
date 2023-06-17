let addNewTaskPopButton = document.getElementsByClassName("rightHeader");
let parentMain = document.getElementsByClassName("parentMain");
let parentMain2 = document.getElementsByClassName("parentMain2");
let addTaskFromDetailsButton = document.getElementsByClassName("addSymbol2");
let todoDetailsPageBack = document.getElementsByClassName(
  "todoDetailsPageBack"
);
let parent = document.getElementsByClassName("parent");
let body = document.getElementsByTagName("body");
let header = document.getElementsByTagName("header");
let taskPopUp = document.getElementsByClassName("taskPopUp");
let taskPopUp2 = document.getElementsByClassName("taskPopUp2");
let taskClose = document.getElementById("taskClose");
let subTaskClose = document.getElementById("taskClose2");
let addTaskButton = document.getElementById("taskAdd");
let addSubTaskButton = document.getElementById("taskAdd2");
let addTaskInput = document.getElementById("taskInput");
let addSubTaskInput = document.getElementById("taskInput2");
let headingAddNewTaskPop = document.getElementsByClassName(
  "headingAddNewTaskPop"
);
let newTaskParent = document.getElementsByClassName("cardContainer");
let noItemInToDoList = document.getElementsByClassName("noItemInToDoList");
let subTaskRuning = false;

// code start

addNewTaskPopButton[0].addEventListener("click", () => {
  openTaskPopUp();
});
addTaskFromDetailsButton[0].addEventListener("click", () => {
  addTaskFromDetails();
});
todoDetailsPageBack[0].addEventListener("click", () => {
  closeTODOTaskPage();
});

taskClose.addEventListener("click", () => {
  closeTaskPopUp();
});
addTaskButton.addEventListener("click", () => {
  addNewTask();
  closeTaskPopUp();
});
function openTODOTaskPage() {
  parentMain[0].classList.add("hide");
  parentMain2[0].classList.remove("hide");
  parentMain2[0].classList.remove("parentBlur");
  console.log("openDetailsPage");
  parentMain[0].setAttribute("style", " display: none");
  parentMain2[0].setAttribute("style", " display: block");
}
function addTaskFromDetails() {
  openTaskPopUp();

  parentMain2[0].classList.add("parentBlur");
  parentMain2[0].setAttribute("style", " display: block");
  parentMain2[0].classList.remove("hide");
  // closeTODOTaskPage();
}
function closeTODOTaskPage() {
  console.log("MainPage Opened");
  parentMain[0].classList.remove("hide");
  parentMain2[0].classList.add("hide");

  parentMain[0].setAttribute("style", " display: block");
}
// function closeTODOTaskPage() {
//   parentMain2[0].classList.add("parentBlur");
//   // parentMain2[0].setAttribute("style", " display: none");
//   taskPopUp[0].setAttribute("style", " display: block");
//   parent[0].setAttribute("style", "background-color: rgb(53, 54, 51)");
//   body[0].setAttribute("style", "background-color: rgb(53, 54, 51)");
//   console.log("open");
//   // closeTODOTaskPage();

//   // parentMain[0].setAttribute("style", " display: block");
//   // parentMain2[0].setAttribute("style", " display: none");
//   // parentMain[0].classList.remove("parentBlur");
//   // header[0].setAttribute("style", " display: flex");
//   // taskPopUp[0].setAttribute("style", " display: none");
//   // taskPopUp2[0].setAttribute("style", " display: none");
//   // parent[0].setAttribute("style", "background-color: rgb(127, 255, 8)");
//   // body[0].setAttribute("style", "background-color: rgb(127, 255, 8)");
//   console.log("closeTODO Page");
//   // addTaskInput.innerHTML = "";
// }
function openTaskPopUp() {
  parentMain[0].classList.add("parentBlur");
  taskPopUp[0].setAttribute("style", " display: block");
  parent[0].setAttribute("style", "background-color: rgb(53, 54, 51)");
  body[0].setAttribute("style", "background-color: rgb(53, 54, 51)");
  console.log("open");
  // closeTODOTaskPage();
}
function closeTaskPopUp() {
  parentMain[0].setAttribute("style", " display: block");
  parentMain[0].classList.remove("parentBlur");
  header[0].setAttribute("style", " display: flex");
  taskPopUp[0].setAttribute("style", " display: none");
  parent[0].setAttribute("style", "background-color: rgb(53, 54, 51)");
  body[0].setAttribute("style", "background-color: rgb(53, 54, 51)");
  console.log("close");
  addTaskInput.innerHTML = "";
  // closeTODOTaskPage();
}

// Sub task popUp

function openSubTaskPopUp() {
  taskPopUp2[0].setAttribute("style", " display: block");
  parent[0].setAttribute("style", " background-color: rgb(53, 54, 51)");
  body[0].setAttribute("style", " background-color: rgb(53, 54, 51)");
  console.log("openSubtask");
}
function closeSubTaskPopUp() {
  parentMain[0].setAttribute("style", " display: block");
  parentMain[0].classList.remove("parentBlur");
  header[0].setAttribute("style", " display: flex");
  taskPopUp2[0].setAttribute("style", " display: none");
  parent[0].setAttribute("style", " background-color: rgb(53, 54, 51)");
  body[0].setAttribute("style", " background-color: rgb(53, 54, 51)");
  console.log("closeSubTask");
  addSubTaskInput.innerHTML = "";
}

let taskCount = 0;
function addNewTask() {
  taskCount++;
  if (taskCount > 0) {
    noItemInToDoList[0].setAttribute("style", " display: none");
  } else {
    noItemInToDoList[0].setAttribute("style", " display: block");
  }

  // creating element
  var taskContainer = document.createElement("div");
  var taskHeading = document.createElement("div");
  var hr = document.createElement("hr");
  var subTaskContainer = document.createElement("div");
  var removeTaskContainer = document.createElement("div");
  var removeTaskImage = document.createElement("img");
  var addSubTaskImage = document.createElement("img");
  // appending element
  newTaskParent[0].appendChild(taskContainer);
  taskContainer.appendChild(taskHeading);
  taskContainer.appendChild(hr);
  taskContainer.appendChild(subTaskContainer);
  taskContainer.appendChild(removeTaskContainer);
  removeTaskContainer.appendChild(removeTaskImage);
  removeTaskContainer.appendChild(addSubTaskImage);

  // styleing element
  taskContainer.classList.add("taskContainer");
  taskContainer.classList.add(`id${taskCount}`);
  taskContainer.id = `id${taskCount}`;
  // var uniqeId = document.getElementsByClassName(`uniqeId${taskCount}`);
  var uniqeId = document.getElementById(`id${taskCount}`);
  taskHeading.classList.add("taskHeading");
  subTaskContainer.classList.add("subTaskContainer");
  subTaskContainer.classList.add(`uniqeId${taskCount}`);
  subTaskContainer.id = `uniqeId${taskCount}`;
  removeTaskContainer.classList.add("removeTaskContainer");
  removeTaskImage.classList.add("removeTaskImage");
  addSubTaskImage.classList.add("addSubTaskImage");

  // subTaskContainer.classList.add("subTaskContainer");
  taskHeading.innerHTML = addTaskInput.value;
  removeTaskImage.src = "./trash.png";
  addSubTaskImage.src = "./edit.png";

  closeTaskPopUp();

  // task Datails
  function openDetails() {
    openTODOTaskPage();
  }
  taskHeading.addEventListener("click", () => {
    openDetails();
  });

  // removeTodoTask
  removeTaskImage.addEventListener("click", () => {
    removeTodoTask();
  });
  function removeTodoTask() {
    taskContainer.remove();
  }

  // AddTodoSubTask

  addSubTaskImage.addEventListener("click", () => {
    openSubTaskPopUp();
  });
  subTaskClose.addEventListener("click", () => {
    closeSubTaskPopUp();
  });
  addSubTaskButton.addEventListener("click", () => {
    AddTodoSubTask(subTaskContainer);
  });
}
// testing
function AddTodoSubTask(subTaskContainer) {
  closeSubTaskPopUp();

  console.log("subTask Created");
  // createing element
  var subtaskParent = document.createElement("div");
  var subTaskTitle = document.createElement("h2");
  var subTaskMarker = document.createElement("button");
  var breacktag = document.createElement("br");
  var breacktag2 = document.createElement("br");
  // added to parent

  subTaskContainer.appendChild(subtaskParent);

  // uniqeId.appendChild(subtaskParent);
  subtaskParent.appendChild(subTaskTitle);
  subtaskParent.appendChild(subTaskMarker);
  subTaskContainer.appendChild(breacktag);
  subTaskContainer.appendChild(breacktag2);
  // styling element
  subtaskParent.classList.add("subtaskParent");
  subTaskTitle.classList.add("subTaskTitle");
  subTaskMarker.classList.add("subTaskMarker");
  subTaskTitle.innerHTML = addSubTaskInput.value;
  subTaskMarker.innerHTML = "Done";

  // marker codeing
  let marker = false;
  subTaskMarker.addEventListener("click", () => {
    if (marker) {
      subTaskTitle.classList.remove("marked");
      console.log("unmarked");
      marker = false;
      subTaskMarker.innerHTML = "Done";
    } else {
      subTaskTitle.classList.add("marked");
      console.log("marked");
      marker = true;
      subTaskMarker.innerHTML = "UnDone";
    }
  });
}
// testing
// hide no item text
if (taskCount > 0) {
  noItemInToDoList[0].setAttribute("style", " display: none");
} else {
  noItemInToDoList[0].setAttribute("style", " display: block");
}
