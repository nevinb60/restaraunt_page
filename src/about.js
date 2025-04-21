import CookieBanner from "./asset/chocolate-chip-cookies.png"

export function loadAbout(contentElement) {

    contentElement.style.backgroundImage = ''

    contentElement.style.backgroundImage = `url(${CookieBanner})`
    contentElement.style.backgroundSize = 'cover'

    contentElement.classList = 'flex justify-center h-screen w-screen bg-center'

    const info = document.createElement('div')
    info.classList = 'flex flex-col text-center bg-purple-200 p-10 h-[60%] mt-8 rounded-4xl'
    const headline = document.createElement('p')
    headline.textContent = 'About us'
    headline.classList = 'font-bold text-5xl text-purple-500 gorditas-bold'





    const main = document.createElement('div')
    main.classList = 'flex flex-col justify-between ml-2 mr-2 mt-6 gap-5 bg-white rounded-2xl text-xl gap-8 p-10'
    main.innerHTML = `

    <p>We are not a cookie company. We are a dessert enterprise.</p>
    
    `


    info.appendChild(headline)
    info.appendChild(main)

    contentElement.appendChild(info)


}