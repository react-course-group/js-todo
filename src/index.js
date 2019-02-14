import render from './render'
import App from './App'

window.renderApp = () => render(App, document.getElementById('app'))
window.renderApp()
window.addEventListener('popstate', renderApp)
