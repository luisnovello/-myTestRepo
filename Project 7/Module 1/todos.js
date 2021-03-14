const TODOS_URL = `https://jsonplace-univclone.herokuapp.com/todos`

function fetchTodos() {
    return fetch(TODOS_URL)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log("ERROR", error)
        })
}

function renderAllTodos(todos) {
    $(".todo-list").empty()
    todos.forEach((todo) => {
        let todoElement = renderTodo(todo)
        if (todo.completed === true){
            $(".complete").append(todoElement)
        }else {
            $(".incomplete").append(todoElement)
        }
    })
}

function renderTodo(todo) {
    let renderedTodo = `
    <div class="todo">
    <h3>${todo.title}</h3>
    <footer>
    ${todo.completed ? "<button>DONE</button>" : "<button>UNDO</button>" }
    </footer>
  </div>`
    return renderedTodo
}

function bootstrap() {
    fetchTodos().then(renderAllTodos)

}

bootstrap();