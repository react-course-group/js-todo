var tasks = [
'Yo'
]

var None = () => `
  <div class="text-grey-light">
    No Tasks.
  </div>
`

var Task = (content, index) => {
  return `
  <div class="text-grey-darkest border-b border-grey-light p-3">
    <p style="display:inline">${content}</p>
    <i id="taskId-${index}" class="delete-task far fa-trash-alt"></i> 
  </div>
  `
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

  var deleteButton = document.querySelectorAll('.delete-task')
  deleteButton.forEach(element => {
    element.addEventListener('click', event => {
      tasks.splice(event.toElement.id.substring(7), 1);
      window.renderApp()
    })
  });
}

export default Home
