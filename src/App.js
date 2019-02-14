import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

var contents = {home: Home, about: About}

var App = () => {
  var Page = contents[window.location.hash.substring(1) || 'home']
  return `
    ${Navbar()}
    <div class="container mx-auto">
      ${Page()}
    </div>
  `
}

var l = 5

App.addEventListeners = () => {
  var Page = contents[window.location.hash.substring(1) || 'home']
  if (Navbar.addEventListeners) Navbar.addEventListeners()
  if (Page.addEventListeners) Page.addEventListeners()
}

export default App