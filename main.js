fetch('./todo.json')
    .then((res) => res.json())
    .then((data) => {
        displayTodo(data.todo)
    })

let todoEl = document.getElementById('todo')

function displayTodo(data) {
    let todoHTML = ''

    displayFeaturedTask(data[0])

        for (let task of data) {
            todoHTML += `
            <div class="card mb-2">
                <div class="card-body">
                    <h2 class="card-text">${task.title}</h2>
                    <p class="card-text">${task.description}</p>
                </div>
            </div>
            `
        }

        todoEl.innerHTML = todoHTML

        let todoEls = document.querySelectorAll('#todo .card')
        console.log(todoEls)

        for (let i = 0; i < todoEls.length; i++) {
            todoEls[i].addEventListener('click', (event) => {
                let taskInfo = data[i]
                displayFeaturedTask(taskInfo)
            })
        }
}

function displayFeaturedTask(task) {
    console.log(task)
    let featuredTaskEl = document.getElementById('featured-task')

    let tasksHTML = ''

    for (let t in task.tasks) {
        tasksHTML += `
        <li>${t}: ${task.tasks[t]}</li>
        `
    }

    let taskHTML = `
    <h2>${task.title}</h2>
    <p>Title: ${task.description}</p>
    <h3>Skills:</h3>
    <ul>
        ${tasksHTML}
    <ul>
    `
    featuredTaskEl.innerHTML = taskHTML
}