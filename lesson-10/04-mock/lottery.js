const generateNumber = require("./generateNumber");

function lottery(expected) {
  const got = generateNumber();

  if (expected !== got) {
    return "You lost:(";
  }

  return "You won!";
}

// console.log(lottery(10));
// console.log(lottery(17));
// console.log(lottery(20));
// console.log(lottery(11));
// console.log(lottery(25));

module.exports = lottery;
