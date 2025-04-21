export function loadOrder(contentElement) {



    contentElement.style.backgroundImage = "url('./chocolate-chip-cookies.png')"
    contentElement.style.backgroundSize = 'cover'

    contentElement.classList = 'flex justify-center h-screen w-screen bg-center'

    const info = document.createElement('div')
    const headline = document.createElement('p')
    headline.textContent = 'Start Order'
    headline.classList = 'info font-bold text-5xl text-purple-500 gorditas-bold'

    info.appendChild(headline)

    info.classList = 'flex flex-col text-center bg-purple-200 p-10 h-[60%] mt-8 rounded-4xl'


    const main = document.createElement('div')
    main.classList = 'flex justify-between ml-2 mr-2 mt-6 gap-5'

    const delivery = document.createElement('button')
    delivery.classList = ' delivery flex flex-col delivery text-3xl bg-purple-500 text-white p-3 rounded-2xl justify-center gap-2 gorditas-bold'
    const deliveryImg = document.createElement('img')
    deliveryImg.src = './delivery.svg'
    deliveryImg.style.height = '3em'
    delivery.textContent = 'Delivery'
    main.appendChild(delivery)
    delivery.appendChild(deliveryImg)


    const pickup = document.createElement('button')
    pickup.classList = 'pickup flex flex-col gap-2 pickup text-3xl bg-purple-500 text-white p-3 rounded-2xl gorditas-bold'
    const pickupImg = document.createElement('img')
    pickupImg.src = './store.svg'
    pickupImg.style.height = '4em'
    pickup.textContent = 'Pickup'
    pickup.appendChild(pickupImg)
    main.appendChild(pickup)



    info.appendChild(main)



    const alternative = document.createElement('div')
    alternative.classList = 'flex mt-8 flex-col gap-8  '
    const giftCard = document.createElement('button')
    giftCard.textContent = 'Digital gift cards'
    giftCard.classList = 'text-2xl bg-purple-500 p-2 rounded-2xl font-bold text-white'



    const buyNPL = document.createElement('button')
    buyNPL.textContent = 'Buy Now Pay Later!'
    buyNPL.classList = 'bg-purple-500 text-2xl p-2 rounded-2xl font-bold text-white'

    alternative.appendChild(giftCard)

    info.appendChild(alternative)
    alternative.appendChild(buyNPL)






    contentElement.appendChild(info)



}