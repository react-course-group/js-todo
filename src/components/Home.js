var tasks = [
    'Yo'
]

var None = () => `
  <div class="text-grey-light">
    No Tasks.
  </div>
`

var Remove = (index) => `
 <span class="float-right" data-remove-task="${index}">
    <svg class="fill-current h-6 w-6 text-red" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
`

var Task = (content, index) => {
    return `<p class="text-grey-darkest border-b border-grey-light p-3">${content}  ${Remove(index)}</p>`
}

var Home = () => `
  <input id="task-input" class="block w-full my-5 p-3 border-b-2 border-b-grey focus:border-blue" placeholder="What to do?" type="text" />   
  ${tasks.map(Task).join('') || None()}
`

Home.addEventListeners = () => {
    var input = document.getElementById('task-input')
    input.addEventListener('keyup', event => {
        if (event.key == 'Enter') {
            tasks.push(input.value)
            window.renderApp()
        }
    })
    document.querySelectorAll("[data-remove-task]").forEach(element => {
        element.addEventListener("click", () => {
            delete tasks[element.dataset.removeTask];
            window.renderApp()
        })
    })
}

export default Home
