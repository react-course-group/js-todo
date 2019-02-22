var DeleteTask = (index) => `
    <i id="task-${index}" class="delete-task far fa-trash-alt" style="float:right; cursor: pointer"></i>
`


DeleteTask.addEventListeners = (tasks) => {
    var deleteButton = document.querySelectorAll('.delete-task')
    deleteButton.forEach(element => {
        element.addEventListener('click', event => {
            event.target.parentNode.parentNode.removeChild(event.srcElement.parentNode);
            tasks.splice(event.toElement.id.substring(5), 1);
            window.renderApp()
        })
    });
}

export default DeleteTask