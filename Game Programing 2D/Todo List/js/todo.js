function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

let todos = []

// let todos = [
//     {
//         id: create_UUID(),
//         title: "Hôm nay chơi game",
//         status: true
//     },
//     {
//         id: create_UUID(),
//         title: "Học Lập Trình Javascript",
//         status: false
//     }
// ]

let todo_List = document.querySelector(".todo-list")
let btn_add = document.querySelector("#btn-add")
let todo_option_item = document.querySelectorAll(".todo-option-item input")
let btn_update = document.querySelector("#btn-update")
let input_check = document.querySelectorAll(".todo-item-title input")
let selectedID = ''

function renderUI(todos) {
    // dùng vòng lặp để render
    todo_List.innerHTML = "";
    let todoItem = "";
    let optionSelected = getOptionSelected()
    let newTodos

    switch (optionSelected) {
        case 1: // All
            newTodos = [...todos]
            break
        case 2: // Chưa hoàn thành
            newTodos = todos.filter(todos => todos.status == false)
            break
        case 3: // Hoàn thành
            newTodos = todos.filter(todos => todos.status == true)
            break
        default:
            newTodos = [...todos]
            break
    }

    if (newTodos.length == 0) {
        todo_List.innerHTML = `<p>Không có công việc...</p>`
        return
    }
    else {
        for (i = 0; i < newTodos.length; i++) {
            let a = newTodos[i]
            todoItem += `
                    <div class="todo-item ${a.status ? `active-todo` : ''}">
                        <div class="todo-item-title">
                            ${a.status
                    ? `<input type="checkbox" checked onclick="toggleStatus('${a.id}')">`
                    : `<input type="checkbox" onclick="toggleStatus('${a.id}')">`
                }
                            <p>${a.title}</p>
                        </div>
                        <div class="option">
                            <button class="btn btn-update">
                                <img src="./img/pencil.svg" alt="icon" onclick="updateTodo('${a.id}')">
                            </button>
                            <button class="btn btn-delete">
                                <img src="./img/remove.svg" alt="icon" onclick="deleteTodo('${a.id}')">
                            </button>
                        </div>
                    </div>
            `

        }
        todo_List.insertAdjacentHTML("beforeend", todoItem)
    }
}

todo_option_item.forEach(btn => {
    btn.addEventListener('change', function () {
        // renderUI(todos)
        setTodosFromLocalStorage(todos)
    })
})

btn_add.addEventListener("click", function () {
    // lấy value trong ô input
    let input = document.querySelector('#todo-input')
    if (input.value == '') {
        alert("Hãy Nhập Công Việc!")
    }
    // tạo object todos mới
    else {
        let a = {
            id: create_UUID(),
            title: input.value,
            status: false
        }
        todos.push(a)
        input.value = ''
    }
    // push vào mảng
    // render lại UI
    // renderUI(todos)
    setTodosFromLocalStorage(todos)
})
console.log(todos)




// Lấy giá trị trong ô Radio
function getOptionSelected() {
    for (let i = 0; i < todo_option_item.length; i++) {
        if (todo_option_item[i].checked) {
            return parseInt(todo_option_item[i].value)
        }
    }
}

function updateTodo(id) {
    let input = document.querySelector('#todo-input')
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            input.value = todos[i].title
            selectedID = id
        }
    }
    btn_add.style.display = 'none'
    btn_update.style.display = 'block'
}

btn_update.addEventListener("click", function () {
    let input = document.querySelector('#todo-input')
    if (input.value == '') {
        alert("Hãy Nhập Công Việc!")
    }
    else {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == selectedID) {
                todos[i].title = input.value
            }
        }
        selectedID = ''
        setTodosFromLocalStorage(todos)
        btn_add.style.display = 'block'
        btn_update.style.display = 'none'
        input.value = ''
    }

})

function deleteTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1)
        }
    }
    // renderUI(todos)
    setTodosFromLocalStorage(todos)
}

function toggleStatus(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].status = !todos[i].status
        }
    }
    // renderUI(todos)
    setTodosFromLocalStorage(todos)
}

function setTodosFromLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos))
    renderUI(todos)
}

function getTodosFromLocalStorage() {
    const todosLocalStorage = localStorage.getItem("todos")
    if (todosLocalStorage) {
        todos = JSON.parse(todosLocalStorage)
        renderUI(todos)
    }
}

function init() {
    getTodosFromLocalStorage()
    // renderUI(todos)
}

window.onload = init()