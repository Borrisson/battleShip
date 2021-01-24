const _ = require("lodash");


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
		switch (direction) {
			case "vertical":
			const range =

				break;
			case "horizontal":
				const x2 = x + length;
				const range = _.range(x, x2);
				const newBoard = this.board.map((row, index) => {
					if (y === index) {
						return row.map((column, index) => {
							console.log(range.includes(index));
							if (range.includes(index)) {
								return "x";
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

	attack(x, y) {
		if (this.ships.length !== 0) {
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

newPlayer.placeShip(4, 6, "horizontal", 4);

console.log(newPlayer.board);

newPlayer.attack(4, 6);
console.log(newPlayer.board);
