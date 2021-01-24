const { shipRange } = require("./helpers");
const Player = require('./player');

class Board {
	constructor(name) {
		this.player = new Player(name);
		this.board = [
			[null, null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null, null],
		];
	}
	
	//x, y start value in ascending order for placing ship (pick lowest value);

	placeShip(x, y, direction, ship) {
		const rangeY = shipRange(y, ship);
		const rangeX = shipRange(x, ship);
		let newBoard;

		if (ship && rangeY && rangeX) {
			switch (direction) {
				case "vertical":
					newBoard = this.board.map((row, index) => {
						if (rangeY.includes(index)) {
							return row.map((column, index) => (x === index ? "x" : column));
						} else {
							return row;
						}
					});
					break;
				case "horizontal":
					newBoard = this.board.map((row, index) => {
						if (y === index) {
							return row.map((column, index) =>
								rangeX.includes(index) ? "x" : column
							);
						} else {
							return row;
						}
					});
			}
			this.board = newBoard;
		}
	}

	attack(x, y) {
		if (Object.keys(this.player.ships).length !== 0) {
			const newBoard = this.board.map((row, index) => {
				if (y === index) {
					return row.map((column, index) => {
						if (x === index) {
							return column === "x" ? "hit" : "miss";
						} else {
							return column;
						}
					});
				} else {
					return row;
				}
			});
			this.board = newBoard;
		}
	}
}

const newPlayer = new Board("player1");

newPlayer.placeShip(6, 6, "horizontal", 4);

console.log(newPlayer.board);

newPlayer.attack(4, 6);
console.log(newPlayer.board);
