function onPageLoaded() {
  const input = document.querySelector("input[type='text']");
  const ul = document.querySelector("ul.Tasks");
  const AddButton = document.getElementById("AddButton");

  function createTodo() {
    const li = document.createElement("li");
    li.classList.add("Task");
    const checkAndtext = document.createElement("div");
    checkAndtext.classList.add("checkAndtext");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    const textTask = document.createElement("div");
    textTask.classList.add("textTask");
    checkAndtext.append(checkbox);
    checkAndtext.append(textTask);
    const newTodo = input.value;
    textTask.append(newTodo);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("trash");
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-trash-alt");
    deleteBtn.appendChild(icon);
    ul.appendChild(li).append(checkAndtext, deleteBtn);
    input.value = "";
    listenDeleteTodo(deleteBtn);
  }

  function listenDeleteTodo(element) {
    element.addEventListener("click", event => {
      element.parentElement.remove();
    });
  }

  input.addEventListener("keypress", keyPressed => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
      createTodo();
    }
  });

  AddButton.addEventListener("click", event => {
    createTodo();
  });
}

document.addEventListener("DOMContentLoaded", onPageLoaded);
