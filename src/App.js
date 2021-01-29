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
      
      hls: 'https://fliikamediaservice-usea.streaming.media.azure.net/774117b7-f1af-48f4-b2d9-6f51f2b45ffd/4K.Test.MKV.ism/manifest(format=m3u8-cmaf)',
      poster: 'https://testfliika.azureedge.net/thumbnails/wallpapersden.com_new-tenet-poster-4k_5000x2313.jpg ',
    });
    // .then(() => {
    //   player.play();
    // });
    
    return( 
    <div>
        Bitmovin testing Legoo
    </div>
    )



  }

}

 


export default App;
