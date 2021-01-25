import React, { Component } from 'react';
import {Player, PlayerEvent} from 'bitmovin-player';

const config = {
  key: '72fc96e3-318b-452f-91c7-bed54f199dd1', 
};

const player = new Player(document.getElementById('root'), config);

class App extends Component {
  
  render() {
    
    player.load({
      
      hls: 'https://fliikamediaservice-usea.streaming.media.azure.net/10052118-66f9-4c8f-9304-5f1fec768438/dreambelt.ism/manifest(format=m3u8-cmaf)',
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
