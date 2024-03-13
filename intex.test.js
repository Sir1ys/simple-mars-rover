const marsRover = require("./index");

describe("marsRover", () => {
  it("return correct position when move forward is passed", () => {
    expect(marsRover("M")).toBe("0:1:N");
    expect(marsRover("MM")).toBe("0:2:N");
    expect(marsRover("MMM")).toBe("0:3:N");
    expect(marsRover("MMMM")).toBe("0:4:N");
  });

  it("return correct position when 10 moves forward are passed", () => {
    expect(marsRover("MMMMMMMMMM")).toBe("0:0:N");
  });

  it("return correct position when changing direction to left is passed", () => {
    expect(marsRover("L")).toBe("0:0:W");
  });

  it("return correct position when changing direction to right is passed", () => {
    expect(marsRover("R")).toBe("0:0:E");
  });

  it("return correct position when changing direction to left and moves forward are passed", () => {
    expect(marsRover("LM")).toBe("1:0:W");
    expect(marsRover("LMM")).toBe("2:0:W");
    expect(marsRover("LMMM")).toBe("3:0:W");
    expect(marsRover("LMMMM")).toBe("4:0:W");
    expect(marsRover("LMMMMM")).toBe("5:0:W");
  });

  it("return correct position when changing direction to right and moves forward are passed", () => {
    expect(marsRover("RM")).toBe("1:0:E");
    expect(marsRover("RMM")).toBe("2:0:E");
    expect(marsRover("RMMM")).toBe("3:0:E");
    expect(marsRover("RMMMM")).toBe("4:0:E");
    expect(marsRover("RMMMMM")).toBe("5:0:E");
  });
});
