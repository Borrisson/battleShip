const { shipRange } = require("./helpers");

class Board {
	constructor(player) {
		this.player = player;
		this.ships = {
			carrier: 5,
			battleship: 4,
			cruiser: 3,
			submarine: 3,
			destroyer: 2,
		};
		this.board = [
			[null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null, null],
		];
	}
	//x, y start value in ascending order for placing ship (pick lowest value);

	placeShip(x, y, direction, ship) {
		if (ship) {
			let range, newBoard;
			switch (direction) {
				case "vertical":
					range = shipRange(y, ship);
					newBoard = this.board.map((row, index) => {
						if (range.includes(index)) {
							return row.map((column, index) => (x === index ? "x" : column));
						} else {
							return row;
						}
					});
					break;
				case "horizontal":
					range = shipRange(x, ship);
					newBoard = this.board.map((row, index) => {
						if (y === index) {
							return row.map((column, index) =>
								range.includes(index) ? "x" : column
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
		if (Object.keys(this.ships).length !== 0) {
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

newPlayer.placeShip(4, 6, "horizontal", newPlayer.ships.carrier);

console.log(newPlayer.board);

newPlayer.attack(4, 6);
console.log(newPlayer.board);
