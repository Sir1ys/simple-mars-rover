const marsRover = require("./index");

describe("marsRover", () => {
  it("return correct position when move forward is passed", () => {
    expect(marsRover("M")).toBe("0:1:N");
    expect(marsRover("MM")).toBe("0:2:N");
    expect(marsRover("MMM")).toBe("0:3:N");
    expect(marsRover("MMMM")).toBe("0:4:N");
  });

  it("return correct position when changing direction to left is passed", () => {
    expect(marsRover("L")).toBe("0:0:W");
  });
});
