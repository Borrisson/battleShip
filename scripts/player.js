const Ships = require('./ships');

class Player extends Ships {
	constructor(name) {
		super();
		this.name = name;
	}
}

module.exports = Player;