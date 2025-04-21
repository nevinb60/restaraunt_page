import "./styles.css"
import { loadHome } from "./home"
import { loadAbout } from "./about"
import { loadContact } from "./contact";
import { loadOrder } from "./order";


//Div to inject content into
let content = document.getElementById('content');

//html starts with home content
loadHome(content)


//Nav bar buttons
const homeBtn = document.getElementById('home')
const aboutBtn = document.getElementById('about')
const orderBtn = document.getElementById('order')
const contactBtn = document.getElementById('contact')

homeBtn.addEventListener("click", () => {
    content.innerHTML = ''
    loadHome(content)

})

aboutBtn.addEventListener("click", () => {
    content.innerHTML = ''
    loadAbout(content)
})

orderBtn.addEventListener("click", () => {
    content.innerHTML = ''
    loadOrder(content)
})

contactBtn.addEventListener("click", () => {
    content.innerHTML = ''
    loadContact(content)

})





