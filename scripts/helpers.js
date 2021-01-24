const _ = require("lodash");

const shipRange = (firstTile, ship) => {
	const length = firstTile + ship;
	if (length > 9) {
		return null;
	} else {
		return _.range(firstTile, length);
	}
};

module.exports = { shipRange };
