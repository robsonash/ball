const ball = document.querySelector('#ball');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

const spanRed = document.querySelector('#spanRed');
const spanGreen = document.querySelector('#spanGreen');
const spanBlue = document.querySelector('#spanBlue');


red.addEventListener('input', function() {
    const value = red.value;
    spanRed.innerHTML = value;
    ball.style.setProperty('--a', value)
})
green.addEventListener('input', function() {
    const value = green.value;
    spanGreen.innerHTML = value;
    ball.style.setProperty('--b', value)
})
blue.addEventListener('input', function() {
    const value = blue.value;
    spanBlue.innerHTML = value;
    ball.style.setProperty('--c', value)
})