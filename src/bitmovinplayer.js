
var config = {
  key: '72fc96e3-318b-452f-91c7-bed54f199dd1',
};

var player = new bitmovin.player.Player(document.getElementById('root'), config);

player.on(bitmovin.player.PlayerEvent.Playing, () => console.log('player is playing'));

export default bitmovinplayer;