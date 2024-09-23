const player = new core.Player();
const mvae = new music_vae.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_4bar_med_q2');

mvae.initialize().then(() => {
  mvae.sample(1).then((samples) => player.start(samples[0]));
});
