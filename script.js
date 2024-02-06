"use strict";
const input = document.getElementById('input');
const button = document.getElementById('btn');
const zx1 = document.getElementById('zx1');
const zx2 = document.getElementById('zx2');
const zx4 = document.getElementById('zx4');
const zx8 = document.getElementById('zx8');
let zoomNum = 200;
const main = (inputUser, zoom) => {
    const canvas = document.getElementById('primeCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
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
            ctx.fillStyle = 'rgb(255,255,255)';
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
zx1.addEventListener('click', () => {
    zoomNum = 200;
    main(input.valueAsNumber, zoomNum);
});
zx2.addEventListener('click', () => {
    zoomNum = 400;
    main(input.valueAsNumber, zoomNum);
});
zx4.addEventListener('click', () => {
    zoomNum = 800;
    main(input.valueAsNumber, zoomNum);
});
zx8.addEventListener('click', () => {
    zoomNum = 1600;
    main(input.valueAsNumber, zoomNum);
});
button.addEventListener('click', () => {
    console.log('click');
    console.log(input.valueAsNumber);
    main(input.valueAsNumber, zoomNum);
});
//# sourceMappingURL=script.js.map