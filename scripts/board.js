const { shipRange } = require("./helpers");
const Player = require("./player");

//I could add another property to keep track of the respctive ships with an array of coodinates, once ship is sunk it tells you which ship sunk.

class Board extends Player {
	constructor(name) {
		super(name);
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
		const shipLength = this.ships[ship];
		const rangeY = shipRange(y, shipLength);
		const rangeX = shipRange(x, shipLength);
		let newBoard;
		delete this.ships[ship];

		try {
			if (ship && (rangeY || rangeX)) {
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
		} catch (e) {
			this.ships[ship] = shipLength;
			const error = new Error(e);
			console.log(`${error.name}: ${error.message}`);
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
