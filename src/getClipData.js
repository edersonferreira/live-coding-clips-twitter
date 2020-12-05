require("dotenv").config();
const randomNumber = require("./randomNumber");
const { default: got } = require("got/dist/source");

async function getClipData(response) {
  data = JSON.parse(response.body);

  // get random clip index
  number = randomNumber(0, data.clips.length);

  let title = data.clips[number].title;
  let url = data.clips[number].url;
  let id = data.clips[number].vod.id;
  try {
    const query = await got(`https://api.twitch.tv/kraken/videos/${id}`, {
      headers: {
        Authorization: process.env.TWITCH_BEARER_TOKEN,
        "client-id": process.env.TWITCH_CLIENT_ID,
        Accept: "application/vnd.twitchtv.v5+json",
      },
    });
    const dataQuery = JSON.parse(query.body);
    dataQueryTitle = dataQuery.title;
    if (dataQuery.title === title) {
      return getClipData();
    } else {
      return { title, url };
    }
  } catch (error) {}
}

module.exports = getClipData;
