import React, { Component } from 'react';
import {Player, PlayerEvent} from 'bitmovin-player';

const config = {
  key: '72fc96e3-318b-452f-91c7-bed54f199dd1', 
  location: {
    ui: 'https://cdn.bitmovin.com/player/web/8/bitmovinplayer-ui.js',
    ui_css: 'https://cdn.bitmovin.com/player/web/8/bitmovinplayer-ui.css',
  },
};

const player = new Player(document.getElementById('root'), config);

class App extends Component {
  
  render() {
    
    player.load({
      
      hls: ' https://fliikamediaservice-usea.streaming.media.azure.net/6612f446-cc08-4eda-94c8-c37ca95dfbef/ULTIMATE CORNER CLAMPS 2.ism/manifest(format=m3u8-cmaf)',
    }).then(() => {
      player.play();
    });
    
    return( 
    <div>
        Bitmovin testing Legoo
    </div>
    )



  }

}

 


export default App;
