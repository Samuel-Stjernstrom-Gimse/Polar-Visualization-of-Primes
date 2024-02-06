const input = document.getElementById('input') as HTMLInputElement
const button = document.getElementById('btn') as HTMLButtonElement
const zx1 = document.getElementById('zx1') as HTMLHeadingElement
const zx2 = document.getElementById('zx2') as HTMLHeadingElement
const zx4 = document.getElementById('zx4') as HTMLHeadingElement
const zx8 = document.getElementById('zx8') as HTMLHeadingElement
let zoomNum: number = 200

const main = (inputUser: number, zoom: number) => {
	const canvas = document.getElementById('primeCanvas') as HTMLCanvasElement | null
	if (canvas) {
		const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')

		if (ctx) {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight

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
				return true
			}

			ctx.fillStyle = 'rgb(255,255,255)'

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

zx1.addEventListener('click', () => {
	zoomNum = 200
	main(input.valueAsNumber, zoomNum)
})
zx2.addEventListener('click', () => {
	zoomNum = 400
	main(input.valueAsNumber, zoomNum)
})
zx4.addEventListener('click', () => {
	zoomNum = 800
	main(input.valueAsNumber, zoomNum)
})
zx8.addEventListener('click', () => {
	zoomNum = 1600
	main(input.valueAsNumber, zoomNum)
})

button.addEventListener('click', () => {
	console.log('click')
	console.log(input.valueAsNumber)
	main(input.valueAsNumber, zoomNum)
})
