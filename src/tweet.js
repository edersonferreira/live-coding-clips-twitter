require("dotenv").config();
const Twit = require("twit");
const getTwitchClip = require("./getTwitchClip");

async function tweet() {
  var T = new Twit({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET_KEY,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET_TOKEN,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: true, // optional - requires SSL certificates to be valid.
  });

  let clip = await getTwitchClip();

  if (clip.coder[1] == "") {
    text = `${clip.clip.title} ${clip.clip.url} | ${clip.coder[0]}`;
  } else {
    text = `${clip.clip.title} ${clip.clip.url} | ${clip.coder[1]}`;
  }

  T.post("statuses/update", { status: text }, function (
    err,
    data,
    response
  ) {});
}

module.exports = tweet;
