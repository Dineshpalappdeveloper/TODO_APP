let addNewTaskPopButton = document.getElementsByClassName("rightHeader");
let parentMain = document.getElementsByClassName("parentMain");
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
taskClose.addEventListener("click", () => {
  closeTaskPopUp();
});
addTaskButton.addEventListener("click", () => {
  addNewTask();
});

function openTaskPopUp() {
  parentMain[0].classList.add("parentBlur");
  taskPopUp[0].setAttribute("style", " display: block");
  parent[0].setAttribute("style", "background-color: aqua");
  body[0].setAttribute("style", "background-color: aqua");
  console.log("open");
}
function closeTaskPopUp() {
  parentMain[0].setAttribute("style", " display: block");
  parentMain[0].classList.remove("parentBlur");
  header[0].setAttribute("style", " display: flex");
  taskPopUp[0].setAttribute("style", " display: none");
  parent[0].setAttribute("style", "background-color: rgb(127, 255, 8)");
  body[0].setAttribute("style", "background-color: rgb(127, 255, 8)");
  console.log("close");
}

// Sub task popUp

function openSubTaskPopUp() {
  parentMain[0].classList.add("parentBlur");
  taskPopUp2[0].setAttribute("style", " display: block");
  parent[0].setAttribute("style", "background-color: aqua");
  body[0].setAttribute("style", "background-color: aqua");
  console.log("openSubtask");
}
function closeSubTaskPopUp() {
  parentMain[0].setAttribute("style", " display: block");
  parentMain[0].classList.remove("parentBlur");
  header[0].setAttribute("style", " display: flex");
  taskPopUp2[0].setAttribute("style", " display: none");
  parent[0].setAttribute("style", "background-color: rgb(127, 255, 8)");
  body[0].setAttribute("style", "background-color: rgb(127, 255, 8)");
  console.log("closeSubTask");
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
  var uniqeId = document.getElementsByClassName(`uniqeId${taskCount}`);
  taskHeading.classList.add("taskHeading");
  subTaskContainer.classList.add("subTaskContainer");
  subTaskContainer.classList.add(`uniqeId${taskCount}`);
  removeTaskContainer.classList.add("removeTaskContainer");
  removeTaskImage.classList.add("removeTaskImage");
  addSubTaskImage.classList.add("addSubTaskImage");

  // subTaskContainer.classList.add("subTaskContainer");
  taskHeading.innerHTML = addTaskInput.value;
  removeTaskImage.src = "./trash.png";
  addSubTaskImage.src = "./edit.png";

  closeTaskPopUp();

  // task Datails
  taskHeading.addEventListener("click", () => {
    removeTodoTask();
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
    AddTodoSubTask();
  });

  function AddTodoSubTask() {
    closeSubTaskPopUp();

    console.log("subTask Created");
    // createing element
    var subtaskParent = document.createElement("div");
    var subTaskTitle = document.createElement("h2");
    var subTaskMarker = document.createElement("button");
    var breacktag = document.createElement("br");
    var breacktag2 = document.createElement("br");
    // added to parent

    // subTaskContainer.appendChild(subtaskParent);

    uniqeId[0].appendChild(subtaskParent);
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
  console.log(uniqeId);
}

// hide no item text
if (taskCount > 0) {
  noItemInToDoList[0].setAttribute("style", " display: none");
} else {
  noItemInToDoList[0].setAttribute("style", " display: block");
}
