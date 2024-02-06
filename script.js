"use strict";
const section = document.getElementById('sec');
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
    return true;
}
for (let i = 0; i < 290000; i++) {
    if (isPrime(i)) {
        const coordinates = polarToCartesian(i, i);
        const prime = document.createElement('div');
        prime.style.top = `${coordinates[0] * 0.0115 + window.innerHeight / 2}px`;
        prime.style.left = `${coordinates[1] * 0.0115 + window.innerWidth / 2}px`;
        section.append(prime);
    }
}
let rotation = 0;
const rotate = () => {
    rotation += 1;
    section.style.rotate = `${rotation}deg`;
};
//# sourceMappingURL=script.js.map