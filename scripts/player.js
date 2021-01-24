const Ships = require('./ships');

class Player {
	constructor(name) {
    this.name = name;
    this.ships = new Ships;
	}
}

module.exports = Player;