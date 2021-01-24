const _ = require('lodash');


class Board {
	constructor(player) {
		this.player = player;
		this.carrier = ["x", "x", "x", "x", "x"];
		this.battleship = ["x", "x", "x", "x"];
		this.cruiser = ["x", "x", "x"];
		this.submarine = ["x", "x", "x"];
		this.destroyer = ["x", "x"];
		this.ships = [
			this.carrier,
			this.battleship,
			this.cruiser,
			this.submarine,
			this.destroyer,
		];
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

	placeShips() {}

	attack(x, y) {
	const newBoard = this.board.map((row, index) => {
			if (x === index) {
				return row.map((column, index) => {
					if (y === index) {
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


const newPlayer = new Board("player1");
console.log(newPlayer.board);
newPlayer.attack(4, 6);
console.log(newPlayer.board);