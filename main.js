setTimeout(function () {
  $('.loader-bg').fadeToggle()
}, 1500)

const navbar = document.getElementById('navbar')
const hamI = document.getElementById('hamI')
const hamIcon = document.querySelector('.hamb')

hamIcon.addEventListener('click', toggleMenu)

function toggleMenu() {
  if (navbar.classList.contains('navbar-mobile')) {
    navbar.classList.remove('navbar-mobile')
    hamI.classList.remove('fa-window-close')
    hamI.classList.add('fa-ellipsis-h')
    hamIcon.style.color = 'black'
  } else {
    navbar.classList.add('navbar-mobile')
    hamIcon.style.color = 'white'
    hamI.classList.remove('fa-ellipsis-h')
    hamI.classList.add('fa-window-close')
  }
}
