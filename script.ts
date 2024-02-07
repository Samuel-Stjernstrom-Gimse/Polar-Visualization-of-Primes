const input = document.getElementById('input') as HTMLInputElement
const button = document.getElementById('btn') as HTMLButtonElement
const zoomInn = document.getElementById('zx1') as HTMLHeadingElement
const zoomOut = document.getElementById('zx2') as HTMLHeadingElement
const primeNumber = document.getElementById('primeNumber') as HTMLHeadingElement
let zoomNum: number = 200
let numberOfPrimes: number = 0
let color = 'rgb(255,255,255)'

function polarToCartesian(r: number, a: number): [number, number] {
	const aRad: number = (a * Math.PI) / 180
	const x: number = r * Math.cos(aRad)
	const y: number = r * Math.sin(aRad)
	return [x, y]
}

function isPrime(number: number): boolean {
	if (number < 2) {
		return false
	}
	for (let i: number = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			return false
		}
	}
	numberOfPrimes++
	return true
}

const main = (inputUser: number, zoom: number): void => {
	const canvas = document.getElementById('primeCanvas') as HTMLCanvasElement | null

	if (canvas) {
		const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')

		if (ctx) {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight

			ctx.fillStyle = color

			for (let i: number = 0; i < inputUser; i++) {
				if (isPrime(i)) {
					const coordinates: [number, number] = polarToCartesian(i, i)
					const x: number = coordinates[0] * (zoom / inputUser) + window.innerWidth / 2
					const y: number = coordinates[1] * (zoom / inputUser) + window.innerHeight / 2

					ctx.fillRect(x, y, 1, 1) // Draw a pixel
				}
			}
		} else {
			console.error('Canvas context not available')
		}
	} else {
		console.error('Canvas element not found')
	}
}

zoomInn.addEventListener('click', (): void => {
	zoomNum /= 2
	initMain()
})

zoomOut.addEventListener('click', (): void => {
	zoomNum *= 2
	initMain()
})

button.addEventListener('click', (): void => {
	zoomNum = 200
	initMain()
})

const initMain = () => {
	let userInput: number = input.valueAsNumber < 1500000 ? input.valueAsNumber : 1500000
	primeNumber.textContent = `number of primes\nbetween\n0-${userInput}\u00A0=\u00A0${numberOfPrimes}`
	main(userInput, zoomNum)

	primeNumber.textContent = `number of primes\nbetween\n0-${userInput}\u00A0=\u00A0${numberOfPrimes}`
	input.valueAsNumber = userInput
	numberOfPrimes = 0
}
