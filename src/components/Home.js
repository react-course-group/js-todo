import DeleteTask from './Delete-Task'

var tasks = [
'Yo'
]

var None = () => `
  <div class="text-grey-light">
    No Tasks.
  </div>
`

var Task = (content, index) => {
  return `<p class="text-grey-darkest border-b border-grey-light p-3">${content} ${DeleteTask(index)}</p>`
}

var Home = () => `
  <input id="task-input" class="block w-full my-5 p-3 border-b-2 border-b-grey focus:border-blue" placeholder="What to do?"  autofocus="autofocus type="text" />   
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
  if (DeleteTask.addEventListeners) DeleteTask.addEventListeners(tasks)
}

export default Home
