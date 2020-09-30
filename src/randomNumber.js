// function to generate a random number
function randomNumber(min, max) {
  return (
    Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
}

module.exports = randomNumber;
