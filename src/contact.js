export function loadContact(contentElement) {

    contentElement.style.backgroundImage = ''

    contentElement.style.backgroundImage = "url('./chocolate-chip-cookies.png')"
    contentElement.style.backgroundSize = 'cover'

    contentElement.classList = 'flex justify-center h-screen w-screen bg-center'

    const info = document.createElement('div')
    info.classList = 'flex flex-col text-center bg-purple-200 p-10 h-[60%] mt-8 rounded-4xl'
    const headline = document.createElement('p')
    headline.textContent = 'We would love to hear from you!'
    headline.classList = 'font-bold text-5xl text-purple-500 gorditas-bold'





    const main = document.createElement('div')
    main.classList = 'flex flex-col justify-between ml-2 mr-2 mt-6 gap-5 bg-white rounded-2xl text-xl gap-8 p-10'
    main.innerHTML = `

    <p><strong>Phone:</strong> xxx-xxxx</p>
    <p><strong>Email:</strong> groovycookie@gmail.com</p>
    <p><strong>Address:</strong>123 DruryLane, HollyWood</p>
    
    `


    info.appendChild(headline)
    info.appendChild(main)

    contentElement.appendChild(info)
}