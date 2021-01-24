const _ = require("lodash");

const shipRange = (firstTile, ship) => {
  const length = firstTile + ship;
  if(ship > 5) {
    return null;
  } else if (length > 10) {
		return null;
	} else {
		return _.range(firstTile, length);
	}
};

module.exports = { shipRange };
