function marsRover(instructions) {
  let xDir = 0;
  let yDir = 0;
  let direction = "N";

  const directions = ["N", "E", "S", "W"];

  for (let i = 0; i < instructions.length; i++) {
    let instruction = instructions[i];

    if (instruction === "M") {
      switch (direction) {
        case "N":
          yDir === 9 ? (yDir = 0) : (yDir += 1);
          break;

        case "S":
          yDir === 0 ? (yDir = 9) : (yDir -= 1);
          break;

        case "W":
          xDir === 0 ? (xDir = 9) : (xDir -= 1);
          break;

        case "E":
          xDir === 9 ? (xDir = 0) : (xDir += 1);
          break;

        default:
          break;
      }
    }

    const indexOfElement = directions.indexOf(direction);
    if (instruction === "L") {
      direction = directions[(indexOfElement + 3) % 4];
    }

    if (instruction === "R") {
      direction = directions[(indexOfElement + 1) % 4];
    }
  }

  return `${xDir}:${yDir}:${direction}`;
}

module.exports = marsRover;
