import { loadOrder } from "./order";
import ChocolateChipCookie from "./assests/chocolate-chip-cookies.png"

export function loadHome(contentElement) {
    //Banner
    contentElement.style.backgroundImage = '';

    contentElement.classList = 'flex flex-col justify-start h-screen w-screen bg-center bg-purple-200 '

    const headingDiv = document.createElement('div')

    headingDiv.classList = 'h-1/2 bg-white p-5 w-screen'
    headingDiv.style.backgroundImage = ChocolateChipCookie
    headingDiv.style.backgroundSize = 'cover'

    const brand = document.createElement('h1')
    brand.textContent = "Groovy Cookie!"
    brand.classList = 'text-purple-500 text-8xl gorditas-bold  w-fit ml-auto mr-auto bg-white p-4 rounded-3xl'

    const quote = document.createElement('p')
    quote.textContent = "The best cookies you'll ever have!"
    quote.classList = "text-purple-500 text-3xl text-center mt-3 font-bold gorditas-regular mb-5"

    contentElement.appendChild(headingDiv)
    headingDiv.append(brand)
    contentElement.appendChild(quote)


    //Creating Cookie Carousel


    const carousel = document.createElement('div')
    carousel.classList = '  h-[300px] w-screen mb-4'

    const slideDeck = document.createElement('ul')
    slideDeck.classList = 'flex justify-center gap-8'

    const cookieImages = [
        "./chocolate-chip-cookie.jpeg",
        './marshmallow.jpeg',
        "./chocolate-cookie.jpeg",

    ]

    for (let i = 0; i < cookieImages.length; i++) {
        const slide = document.createElement('li')
        const cookieImg = document.createElement('img')

        cookieImg.src = cookieImages[i]
        cookieImg.style.height = '300px'
        cookieImg.style.width = '400px'
        cookieImg.alt = 'Cookie'
        cookieImg.classList = 'object-cover'
        cookieImg.style.border = 'solid purple 3px'
        cookieImg.style.borderRadius = '10%'


        slide.appendChild(cookieImg)
        slideDeck.appendChild(slide)


    }

    carousel.appendChild(slideDeck)
    contentElement.appendChild(carousel)



    //Order Now Button

    const orderNow = document.createElement('button')

    orderNow.textContent = 'Order Now!'

    orderNow.classList = 'order bg-purple-500 text-white font-bold text-4xl w-fit ml-auto mr-auto mt-4 p-7 rounded-4xl'

    orderNow.addEventListener("click", () => {
        contentElement.innerHTML = ''
        loadOrder(contentElement)

    })


    contentElement.appendChild(orderNow)










}


