const waterknop = document.querySelector('#waterknop');
const zonknop = document.querySelector('#zonknop');
const zuurstofknop = document.querySelector('#zuurstofknop');
const gieter = document.querySelector('#gieter');
const zuurstof = document.querySelector('#zuurstof');
const zon = document.querySelector('#zon');
const plant = document.querySelector('.plant');

let randomNumber = Math.random() * 5
randomNumber = Math.round(randomNumber)

function waterGeven() {
    gieter.classList.add('water_geven')
    console.log("doet ie het?")
}

function stopWaterGeven() {
    gieter.classList.remove('water_geven')
}
function zonSchijn() {
    zon.classList.add('zon_schijnen')
    console.log("schijnt de zon?")
}

function stopZonSchijn() {
    zon.classList.remove('zon_schijnen')
}

function zuurstofBellen() {
    zuurstof.classList.add('zuurstof_bellen')
    console.log("en nu?!")
}

function stopZuurstofBellen() {
    zuurstof.classList.remove('zuurstof_bellen')
}

let currentIndex = 0;
let plantImages = [
    "images/plant2.png",
    "images/plant3.png",
    "images/plant4.png",
    "images/plant5.png",
    "images/plant6.png",
    "images/plant7.png",
];

function veranderPlant() {
    setTimeout(function () {
        currentIndex = (currentIndex + 1) % plantImages.length;
        plant.src = plantImages[currentIndex];
    }, 3000);
}

function veranderAchtergrond() {
    if (currentIndex == randomNumber) {
        document.body.style.backgroundImage = "images/nacht.png";
    } else {
    }
}
console.log(randomNumber)

waterknop.addEventListener('click', waterGeven);
gieter.addEventListener('transitionend', stopWaterGeven);
zuurstofknop.addEventListener('click', zuurstofBellen);
zuurstof.addEventListener('transitionend', stopZuurstofBellen);
zonknop.addEventListener('click', zonSchijn);
zon.addEventListener('transitionend', stopZonSchijn);

waterknop.addEventListener('click', veranderPlant);
zonknop.addEventListener('click', veranderPlant);
zuurstofknop.addEventListener('click', veranderPlant);

