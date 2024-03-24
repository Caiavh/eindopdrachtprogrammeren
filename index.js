const waterknop = document.querySelector('#waterknop');
const zonknop = document.querySelector('#zonknop');
const zuurstofknop = document.querySelector('#zuurstofknop');
const oogstknop = document.querySelector('#oogstknop')
const gieter = document.querySelector('#gieter');
const zuurstof = document.querySelector('#zuurstof');
const zon = document.querySelector('#zon');
const plant = document.querySelector('.plant');
const oogsthand = document.querySelector('#oogsthand')
// met behulp van https://gomakethings.com/how-to-play-a-sound-with-javascript/
let audioWater = new Audio("audio/watergeluid.mp3") 
let audioZon = new Audio("audio/zongeluid.mp3")
let audioZuurstof = new Audio("audio/bubbels.mp3")
let currentIndex = 0; 
// ChatGPT
// Prompt: hoe kan ik images in een array zetten?
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
}

function stopWaterGeven() {
    gieter.classList.remove('water_geven')
}
function zonSchijn() {
    zon.classList.add('zon_schijnen')
    document.body.style.backgroundImage = "url(images/dag.png)"; 
}

function stopZonSchijn() {
    zon.classList.remove('zon_schijnen')
}

function zuurstofBellen() {
    zuurstof.classList.add('zuurstof_bellen')
}

function stopZuurstofBellen() {
    zuurstof.classList.remove('zuurstof_bellen')
}

function veranderPlant() {
    setTimeout(function () {
        // ChatGPT
        // prompt: hoe automatisch door een array bewegen, waarbij elk stapje +1 is en currentIndex=0 en een length van 5?
        currentIndex = (currentIndex + 1) % plantImages.length;  
        // De % operator brengt de index naar 0 zodra we het einde van de lijst bereiken. 
        // Door de modulusoperator te gebruiken, zorgen we ervoor dat de nieuwe index altijd binnen het bereik van de array blijft. 
        plant.src = plantImages[currentIndex];
        // bron (src) van de afbeelding die wordt toegewezen aan het plant-element.
        veranderAchtergrond()
        Oogsten()
    }, 3000);
}

function veranderAchtergrond() {
    console.log('VeranderAchtergrond')
    if (currentIndex == randomNumber) {
        // https://www.w3schools.com/jsref/prop_style_backgroundimage.asp 
        // Deze regel JavaScript-code wijzigt de achtergrondafbeelding van het body-element van een HTML-document.
        document.body.style.backgroundImage = "url(images/nacht.png)";
    } else {
    }
}
console.log(randomNumber)

// met behulp van: https://gomakethings.com/how-to-play-a-sound-with-javascript/ 
// Door de methode play() wordt het audiobestand audioWater aangeroepen, waardoor het geluid wordt afgespeeld.
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