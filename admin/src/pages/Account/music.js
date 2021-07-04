import React, { PureComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AudioTools from '@/utils/audio';
import '@/assets/css/pages/music.scss';

class Music extends PureComponent {
    state = {
        musicList: [
            { id: uuidv4(), name: '最愛-張學友.mp3', url: require('@/assets/mp3/最愛-張學友.mp3').default }
        ]
    }
    onPlayAudio = () => {
        let myAudio = document.querySelector('#myAudio');
        let audioCtx = null;
        if(!this.audioCtx){
            audioCtx = new AudioTools();
            this.audioCtx = audioCtx;
        }
        if(audioCtx && myAudio.readyState === 4){
            audioCtx && audioCtx.init();
        }
    }
    onPauseAudio = () => {
        let myAudio = document.querySelector('#myAudio');
        if (myAudio.readystate === 4) {
            this.audioCtx = null;
        }
    }
    render(){
        const { musicList } = this.state;
        if(!musicList || musicList.length === 0) return null;
        return(
            <div className="yyn-music">
                <div className="audio-block">
                    <audio id="myAudio" controls src={ musicList[0].url } onPlay={ this.onPlayAudio } onPause={ this.onPauseAudio } loop="loop"></audio>
                    <p className="music-title">正在播放： { musicList[0].name }</p>
                </div>
                <canvas id="myCanvas"></canvas>
            </div>
        )
    }
}

export default Music;
