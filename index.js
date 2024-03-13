function marsRover(instructions) {
  let xDir = 0;
  let yDir = 0;
  let direction = "N";

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

    if (instruction === "L") {
      direction = "W";
    }

    if (instruction === "R") {
      direction = "E";
    }
  }

  return `${xDir}:${yDir}:${direction}`;
}

module.exports = marsRover;
