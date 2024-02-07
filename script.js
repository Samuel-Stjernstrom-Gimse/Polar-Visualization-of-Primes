"use strict";
const input = document.getElementById('input');
const button = document.getElementById('btn');
const zoomInn = document.getElementById('zx1');
const zoomOut = document.getElementById('zx2');
const primeNumber = document.getElementById('primeNumber');
let zoomNum = 200;
let numberOfPrimes = 0;
let color = 'rgb(255,255,255)';
function polarToCartesian(r, a) {
    const aRad = (a * Math.PI) / 180;
    const x = r * Math.cos(aRad);
    const y = r * Math.sin(aRad);
    return [x, y];
}
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    numberOfPrimes++;
    return true;
}
const main = (inputUser, zoom) => {
    const canvas = document.getElementById('primeCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.fillStyle = color;
            for (let i = 0; i < inputUser; i++) {
                if (isPrime(i)) {
                    const coordinates = polarToCartesian(i, i);
                    const x = coordinates[0] * (zoom / inputUser) + window.innerWidth / 2;
                    const y = coordinates[1] * (zoom / inputUser) + window.innerHeight / 2;
                    ctx.fillRect(x, y, 1, 1);
                }
            }
        }
        else {
            console.error('Canvas context not available');
        }
    }
    else {
        console.error('Canvas element not found');
    }
};
zoomInn.addEventListener('click', () => {
    zoomNum /= 2;
    initMain();
});
zoomOut.addEventListener('click', () => {
    zoomNum *= 2;
    initMain();
});
button.addEventListener('click', () => {
    zoomNum = 200;
    initMain();
});
const initMain = () => {
    let userInput = input.valueAsNumber < 1500000 ? input.valueAsNumber : 1500000;
    primeNumber.textContent = `number of primes\nbetween\n0-${userInput}\u00A0=\u00A0${numberOfPrimes}`;
    main(userInput, zoomNum);
    primeNumber.textContent = `number of primes\nbetween\n0-${userInput}\u00A0=\u00A0${numberOfPrimes}`;
    input.valueAsNumber = userInput;
    numberOfPrimes = 0;
};
//# sourceMappingURL=script.js.map