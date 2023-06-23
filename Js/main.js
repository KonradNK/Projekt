const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 20;

function bigText() {
    fontSize += 15
    p.style.fontSize = fontSize + 'px'

}

function smallText() {
    fontSize -= 15
    p.style.fontSize = fontSize + 'px'
}

sizeUp.addEventListener('click', bigText);
sizeDown.addEventListener('click', smallText);

function colors() {
    p.style.color = 'red'
}

color.addEventListener('click', colors);

