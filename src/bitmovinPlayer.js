import React from 'react';
import { Player } from 'bitmovin-player';
import { UIFactory } from 'bitmovin-player/bitmovinplayer-ui';
import 'bitmovin-player/bitmovinplayer-ui.css';


class BitmovinPlayer extends React.Component {
    state = {
      player: null,
    };
  
    playerConfig = {
      key: process.env.REACT_APP_BITMOVIN_PLAYER_KEY,
      playback: {
        autoplay: true,
      }
    };
  
    constructor(props) {
      super(props);
      this.playerDiv = React.createRef();
    }
  
    componentDidMount() {
        if(this.props.playerSource!==null){
          this.setupPlayer();
        }
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.playerSource!==null || (this.props.playerSource.hls !== prevProps.playerSource.hls)) {
        this.changePlayerSource();
      }
    }
  
    componentWillUnmount() {
      this.destroyPlayer();
    }
  
    setupPlayer() {
      const player = new Player(this.playerDiv.current, this.playerConfig);
      UIFactory.buildDefaultUI(player);
      player.load(this.props.playerSource).then(
        () => {
          this.setState({
            ...this.state,
            player,
          });
          console.log("Successfully loaded source");
        },
        () => {
          console.log("Error while loading source");
        }
      );
    }
  
    changePlayerSource() {
      if (this.state.player == null) {
          this.setupPlayer();
      } else {
        this.state.player.load(this.props.playerSource).then(
          () => {
            console.log("Successfully new loaded source");
          },
          () => {
            console.log("Error while loading source");
          }
        );
      }
    }
  
    destroyPlayer() {
      if (this.state.player != null) {
        this.state.player.destroy();
        this.setState({
          ...this.state,
          player: null,
        });
      }
    }
  
    render() {
      return <div id="player" ref={this.playerDiv} />;
    }
  }
  
  export default BitmovinPlayer;

