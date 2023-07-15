let text = document.getElementById("add");
let input1 = document.getElementById("text1");
let body = document.querySelector(".parent");

function addTask() {
  let input = input1.value;
  let task = document.createElement("h1");
  task.innerHTML = `${input}`;
  body.appendChild(task);

  console.log("call");
  console.log(input);
  console.log(task);
}
