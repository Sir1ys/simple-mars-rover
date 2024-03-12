function marsRover(instructions) {
  let xDir = 0;
  let yDir = 0;
  let direction = "N";

  for (let i = 0; i < instructions.length; i++) {
    let instruction = instructions[i];
    if (instruction === "M") {
      yDir += 1;
    }

    if (instruction === "L") {
      direction = "W";
    }
  }

  return `${xDir}:${yDir}:${direction}`;
}

module.exports = marsRover;
