function marsRover(instructions) {
  let xDir = 0;
  let yDir = 0;
  let direction = "N";

  const directions = ["N", "E", "S", "W"];

  for (let i = 0; i < instructions.length; i++) {
    let instruction = instructions[i];

    if (instruction === "M" && direction === "N") {
      if (yDir === 9) {
        yDir = 0;
      } else {
        yDir += 1;
      }
    }

    if (instruction === "M" && direction === "S") {
      if (yDir === 0) {
        yDir = 9;
      } else {
        yDir -= 1;
      }
    }

    if (instruction === "M" && direction === "W") {
      if (xDir === 0) {
        xDir = 9;
      } else {
        xDir -= 1;
      }
    }

    if (instruction === "M" && direction === "E") {
      if (xDir === 9) {
        xDir = 0;
      } else {
        xDir += 1;
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
