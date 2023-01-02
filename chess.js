// Instantiating the board
const canvas = document.getElementById("board")
const b = canvas.getContext("2d")
var size = [8, 8]
b.scale(300/(240*size[0]), 150/(240*size[1]))

// Light and dark squares
let squares = [[]]
for (let i = 0; i < size[0]; i++) {
	for (let j = 0; j < size[1]; j++) {
		b.fillStyle = ((i+(size[1]-j))%2) ? "#77B" : "#669" // Chequerboard
		b.fillRect(240*i, 240*j, 240, 240)
	}
}

// Piece class
class Piece {
	img
	constructor (p) { // TODO add moveset, captureset
		this.img = new Image(240, 240)
		this.img.src = "./img/" + p + ".png"
	}
}

// Piece test
var p = []
for (let i = 0; i < 32; i++) {
	if (i < 16) {
		p[i] = (i < 8) ? new Piece("bP") : new Piece("wP") // Pawns
	} else {
		p[i] = new Piece(((i < 24) ? "b" : "w") + "RSBQKBSR".split('')[i%8]) // Backranks
	}
}

// Attempt at board
var board = [
	[p[16], p[17], p[18], p[19], p[20], p[21], p[22], p[23]],
	[ p[0],  p[1],  p[2],  p[3],  p[4],  p[5],  p[6],  p[7]],
	[ null,  null,  null,  null,  null,  null,  null,  null],
	[ null,  null,  null,  null,  null,  null,  null,  null],
	[ null,  null,  null,  null,  null,  null,  null,  null],
	[ null,  null,  null,  null,  null,  null,  null,  null],
	[ p[8],  p[9], p[10], p[11], p[12], p[13], p[14], p[15]],
	[p[24], p[25], p[26], p[27], p[28], p[29], p[30], p[31]]
]

// Draw pieces
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (board[j][i]) {
            b.drawImage(board[j][i].img, 240*i, 240*j)
        }
    }
}
