const d = document
const menu = d.querySelector('.menu')
const toggle = d.querySelector('.toggle')

const menuToggle = () => {
    menu.classList.toggle('active')

}

menu.addEventListener('click', menuToggle)

