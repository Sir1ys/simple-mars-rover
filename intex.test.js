const marsRover = require("./index");

describe("marsRover", () => {
  it("return correct position when move is passed", () => {
    expect(marsRover("M")).toBe("0:1:N");
  });
});
