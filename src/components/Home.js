var tasks = [
'Yo'
]

var None = () => `
  <div class="text-grey-light">
    No Tasks.
  </div>
`

var Task = content => {
  return `<p class="text-grey-darkest border-b border-grey-light p-3">${content}</p>`
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
}

export default Home
