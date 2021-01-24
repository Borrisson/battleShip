const assert = require("chai").assert;
const { shipRange } = require("../scripts/helpers");
const { describe, it } = require("mocha");

describe("shipRange", () => {
  it("should return null if two arguments sum is greater than 10", () => {
    const ship = 5;
    const result = shipRange(6, ship);
    assert.isNull(result);
  });
  it("should return null if ship length is greater than 5", () => {
    const ship = 6;
    const result = shipRange(3, ship);
    assert.isNull(result);
  });
  it("should return [2,3,4,5,6] for shipRange(2,5)", () => {
    const ship = 5;
    const result = shipRange(2, ship);
    assert.deepEqual(result, [2,3,4,5,6]);
  });
});
