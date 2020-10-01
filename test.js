const getTwitchClip = require('./src/getTwitchClip');

(async () => {
  var clip = await getTwitchClip();
  console.log(clip);
  while (clip.clip == 'cancel') {
    clip = await getTwitchClip();
    console.log(clip);
  }
})();
