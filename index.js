class Todo {
    constructor(description) {
        this._description = description;
    }

    get description() {
        return this._description;
    }
}

let addForm = document.getElementById("add_form");

let todos;

window.onload = function () {
    fetchTodoItems();
}

function fetchTodoItems() {
    todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.map(t => new Todo(t._description));

    const todoList = document.getElementById("todo_list");
    todoList.replaceWith(createTodoList(todos));
}

/**
 * @param {Array<Todo>} todos
 */
function createTodoList(todos) {
    const todoListElement = document.createElement("ul");
    todoListElement.id = "todo_list";

    todos.forEach((todo, index) => {
        const todoElement = document.createElement("li");
        todoElement.textContent = `${index + 1}. ${todo.description}`;
        todoListElement.appendChild(todoElement);
    });

    if (todos.length === 0) {
        const emptyElement = document.createElement("li");
        emptyElement.textContent = "No todos found";
        todoListElement.appendChild(emptyElement);
    }

    return todoListElement;
}

/**
 * @param {Todo} todo
 */
function appendTodoItem(todo) {
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

    const todoList = document.getElementById("todo_list");
    todoList.replaceWith(createTodoList(todos));
}

addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById("add_input");

    if (input.value === "" || input.value === null || input.value.trim() === "") {
        alert("Please enter a description");
        return;
    }

    const todo = new Todo(input.value);

    appendTodoItem(todo);
    input.value = "";
});