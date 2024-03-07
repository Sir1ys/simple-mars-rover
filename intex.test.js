const marsRover = require("./index");

describe("marsRover", () => {
  it("return correct position when move forward is passed", () => {
    expect(marsRover("M")).toBe("0:1:N");
    expect(marsRover("MM")).toBe("0:2:N");
    expect(marsRover("MMM")).toBe("0:3:N");
    expect(marsRover("MMMM")).toBe("0:4:N");
  });
});
