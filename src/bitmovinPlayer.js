import React from 'react';
import { Player } from 'bitmovin-player';
import { UIFactory } from 'bitmovin-player/bitmovinplayer-ui';
import 'bitmovin-player/bitmovinplayer-ui.css';

class BitmovinPlayer extends React.Component {

    state = {
        player: null,
    };

    playerConfig = {
        key: '72fc96e3-318b-452f-91c7-bed54f199dd1'
    };

    playerSource = {
        hls: 'https://fliikamediaservice-usea.streaming.media.azure.net/d4ac996a-f73e-4878-941e-0ed55f0ff783/Wildlife 1080p.ism/manifest(format=m3u8-cmaf)',
        poster: 'https://testfliika.azureedge.net/thumbnails/nature-animals.jpg'
    };

    constructor(props) {
        super(props);
        this.playerDiv = React.createRef();
    }

    componentDidMount() {
        this.setupPlayer();
    }

    componentWillUnmount() {
        this.destroyPlayer();
    }

    setupPlayer() {
        const player = new Player(this.playerDiv.current, this.playerConfig);
        UIFactory.buildDefaultUI(player);
        player.load(this.playerSource).then(() => {
            this.setState({
                ...this.state,
                player
            });
            console.log('Successfully loaded source');
        }, () => {
            console.log('Error while loading source');
        });
    }

    destroyPlayer() {
        if (this.state.player != null) {
            this.state.player.destroy();
            this.setState({
                ...this.state,
                player: null
            });
        }
    }

    render() {
        return <div id='player' ref={this.playerDiv}/>;
    }
}

export default BitmovinPlayer;