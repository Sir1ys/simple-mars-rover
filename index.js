function marsRover(instructions) {
  let xDir = 0;
  let yDir = 0;
  let direction = "N";

  const directions = ["N", "W", "S", "E"];

  for (let i = 0; i < instructions.length; i++) {
    let instruction = instructions[i];

    if (instruction === "M" && (direction === "N" || direction === "S")) {
      yDir += 1;
    }

    if (instruction === "M" && (direction === "W" || direction === "E")) {
      xDir += 1;
    }

    if (yDir === 10) {
      yDir = 0;
    }

    if (xDir === 10) {
      xDir = 0;
    }

    const indexOfElement = directions.indexOf(direction);

    if (instruction === "L") {
      direction = directions[(indexOfElement + 1) % 4];
    }

    if (instruction === "R") {
      direction = directions[(indexOfElement + 3) % 4];
    }
  }

  return `${xDir}:${yDir}:${direction}`;
}

module.exports = marsRover;
