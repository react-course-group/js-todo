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

export default () => `
  <input class="block w-full my-5 p-3 border-b-2 border-b-grey focus:border-blue" placeholder="What to do?" type="text" />   
  ${tasks.map(Task).join('') || None()}
`