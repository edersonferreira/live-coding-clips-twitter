const randomNumber = require('./randomNumber');

function getClipData(response) {
  data = JSON.parse(response.body);

  // get random clip index
  number = randomNumber(0, data.clips.length);

  const title = data.clips[number].title;
  const url = data.clips[number].url;
  return { title, url };
}

module.exports = getClipData;
