require("dotenv").config();
const got = require("got");
const getCoder = require("./getCoder");
const getClipData = require("./getClipData");

// return data from twitch API
async function getTwitchClip() {
  try {
    const coder = getCoder();

    // make the request
    const response = await got(
      `https://api.twitch.tv/kraken/clips/top?channel=${coder[0]}&limit=100&period=month`,
      {
        headers: {
          Authorization: process.env.TWITCH_BEARER_TOKEN,
          "client-id": process.env.TWITCH_CLIENT_ID,
          Accept: "application/vnd.twitchtv.v5+json",
        },
      }
    );
    clipData = await getClipData(response);
    return { clip: clipData, coder: coder };
  } catch (error) {
    // if the live coder doesn't have clips, do the function again
    return getTwitchClip();
  }
}

module.exports = getTwitchClip;
