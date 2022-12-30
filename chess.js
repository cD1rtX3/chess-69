// Instantiating the board
const canvas = document.getElementById("board")
const b = canvas.getContext("2d")
var size = [8, 8]
b.scale(300/(240*size[0]), 150/(240*size[1]))

// Light and dark squares
let squares = [[]]
for (let i = 0; i < size[0]; i++) {
	for (let j = 0; j < size[1]; j++) {
		if (((size[0]-i)+(size[1]-j))%2) {
			b.fillStyle = "#669" // Dark square
		} else {
			b.fillStyle = "#77B" // Light square
		}
		b.fillRect(240*i, 240*j, 240, 240)
	}
}

// Piece class
class Piece {
	img; x; y
	constructor (p, x, y) { // TODO add moveset, captureset
		this.img = new Image(240, 240)
		this.img.src = "./img/" + p + ".png"
		this.x = x * 240
		this.y = y * 240
	}
}

// Piece test
var pp = []
pp[0] = new Piece("bR", 0, 0)
b.drawImage(pp[0].img, pp[0].x, pp[0].y)
