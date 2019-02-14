import navbar from './components/Navbar'
import home from './components/Home'
import about from './components/About'

var contents = {home, about}

export default () => {
  document.getElementById('app').innerHTML = `
    ${navbar()}
    <div class="container mx-auto">
      ${contents[window.location.hash.substring(1) || 'home']()}
    </div>
  `
}