const waterknop = document.querySelector('#waterknop');
const zonknop = document.querySelector('#zonknop');
const zuurstofknop = document.querySelector('#zuurstofknop');
const oogstknop = document.querySelector('#oogstknop')
const gieter = document.querySelector('#gieter');
const zuurstof = document.querySelector('#zuurstof');
const zon = document.querySelector('#zon');
const plant = document.querySelector('.plant');
const oogsthand = document.querySelector('#oogsthand')
let audioWater = new Audio("audio/watergeluid.mp3")
let audioZon = new Audio("audio/zongeluid.mp3")
let audioZuurstof = new Audio("audio/bubbels.mp3")
let currentIndex = 0;
let plantImages = [
    "images/plant2.png",
    "images/plant3.png",
    "images/plant4.png",
    "images/plant5.png",
    "images/plant6.png",
    "images/plant7.png",
];

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
    document.body.style.backgroundImage = "url(images/dag.png)";
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

function veranderPlant() {
    setTimeout(function () {
        currentIndex = (currentIndex + 1) % plantImages.length;
        plant.src = plantImages[currentIndex];
        veranderAchtergrond()
        Oogsten()
    }, 3000);
}

function veranderAchtergrond() {
    console.log('VeranderAchtergrond')
    if (currentIndex == randomNumber) {
        document.body.style.backgroundImage = "url(images/nacht.png)";
    } else {
    }
}
console.log(randomNumber)

function waterGeluid() {
    audioWater.play();
}

function zonGeluid() {
    audioZon.play();
}

function zuurstofGeluid() {
    audioZuurstof.play();
}

function Oogsten() {
    console.log('VeranderAchtergrond')
    if (currentIndex == 5) {
        waterknop.style.display = 'none';
        zonknop.style.display = 'none';
        zuurstofknop.style.display = 'none';
        oogstknop.style.display = 'block'
    } else {
        waterknop.style.display = 'block';
        zonknop.style.display = 'block';
        zuurstofknop.style.display = 'block';
        oogstknop.style.display = 'none'
    }
}
function tomaatOogsten() {
    oogsthand.classList.add('tomaat_oogsten')
    console.log("doet ie het?")
}

function stopOogsten() {
    oogsthand.classList.remove('tomaat_oogsten')
}


waterknop.addEventListener('click', waterGeven);
gieter.addEventListener('transitionend', stopWaterGeven);
zuurstofknop.addEventListener('click', zuurstofBellen);
zuurstof.addEventListener('transitionend', stopZuurstofBellen);
zonknop.addEventListener('click', zonSchijn);
zon.addEventListener('transitionend', stopZonSchijn);
oogstknop.addEventListener('click',tomaatOogsten)
oogsthand.addEventListener('transitionend', stopOogsten)


waterknop.addEventListener('click', veranderPlant);
zonknop.addEventListener('click', veranderPlant);
zuurstofknop.addEventListener('click', veranderPlant);
oogstknop.addEventListener('click', veranderPlant)

waterknop.addEventListener('click', waterGeluid)
zonknop.addEventListener('click',zonGeluid)
zuurstofknop.addEventListener('click',zuurstofGeluid)