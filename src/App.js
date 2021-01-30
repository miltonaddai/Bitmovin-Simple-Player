import React, { Component } from 'react';
import {Player, PlayerEvent} from 'bitmovin-player';
import firebase from "./firebase";



const config = {
  key: '72fc96e3-318b-452f-91c7-bed54f199dd1', 
  location: {
    ui: 'https://cdn.bitmovin.com/player/web/8/bitmovinplayer-ui.js',
    ui_css: 'https://cdn.bitmovin.com/player/web/8/bitmovinplayer-ui.css',
  },
};

const player = new Player(document.getElementById('root'), config);


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
       constRef: firebase.firestore().collection("Test_movie"),
       Test_movie: []
    };
  }
 
  getDb(db) {
    db.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let Test_movie = doc.data();
        Test_movie.key = doc.id;
        
        this.setState({
          Test_movie:this.state.Test_movie.concat(Test_movie)
        });
      });
    });
  }
 
  conponentDidMount() {
    this.getDb(this.state.constRef);
  }



  render() {
    
    const Test_movie = this.state.Test_movie.map(() => <div> 
    {player.load({
    hls: Test_movie.URL
    
  })} 
  </div>
  )
  
    
    return( 
    
        <div>Testing Bitmovin</div>
      
    )



  }

}



export default App;
