// Instantioating the board
var b = document.getElementById("board")
var size = [8, 8]
b.scale(420/(240*size[0]), 420/(240*size[1]))

// Light and dark squares
let squares = [[]]
for (let i = 0; i < size[0]; i++) {
	for (let j = 0; j < size[1]; j++) {
		if (((size[0]-i)+(size[1]-j))%2) {
			b.fillStyle = "#44B" // Dark square
		} else {
			b.fillStyle = "#99D" // Light square
		}
	}
	b.fillRect(240*i, 240*j, 240, 240)
}
