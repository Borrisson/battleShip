const _ = require("lodash");

const shipRange = (firstTile, ship) => {
	const length = firstTile + ship;
	return _.range(firstTile, length);
};

module.exports = { shipRange };
