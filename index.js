function marsRover(direction) {
  let xDir = 0;
  let yDir = 0;

  for (let i = 0; i < direction.length; i++) {
    if (direction[i] === "M") {
      yDir += 1;
    }
  }

  return `${xDir}:${yDir}:N`;
}

module.exports = marsRover;
