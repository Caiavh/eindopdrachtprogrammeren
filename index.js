const waterknop = document.querySelector('#waterknop')
const zonknop = document.querySelector('#zonknop')
const zuurstofknop = document.querySelector('#zuurstofknop')
const gieter = document.querySelector('#gieter')
const zuurstof = document.querySelector('#zuurstof')
const zon = document.querySelector('#zon')

const plantenPlaatje = [
    "images"
]

function waterGeven() {
    gieter.classList.add('water_geven')
    console.log("doet ie het?")
}

function stopWaterGeven () {
    gieter.classList.remove('water_geven')
}
function zonSchijn () {
    zon.classList.add('zon_schijnen')
    console.log("schijnt de zon?")
}

function stopZonSchijn () {
    zon.classList.remove('zon_schijnen')
}

function zuurstofBellen () {
    zuurstof.classList.add('zuurstof_bellen')
    console.log("en nu?!")
}

function stopZuurstofBellen () {
    zuurstof.classList.remove('zuurstof_bellen')
}

waterknop.addEventListener('click', waterGeven)
gieter.addEventListener('transitionend', stopWaterGeven)
zuurstofknop.addEventListener('click', zuurstofBellen)
zuurstof.addEventListener('transitionend', stopZuurstofBellen)
zonknop.addEventListener('click', zonSchijn)
zon.addEventListener('transitionend', stopZonSchijn)

