/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-07-27 21:29:02
 * @LastEditors: Magic
 * @LastEditTime: 2020-07-28 23:50:30
 */
/*
    1.analyser 提供了实时频率以及时间域的分析信息。
    fftSize 绘制音频图的调试
*/
import { getInfoFromLocalStorage } from './index';
class AudioTools {
    constructor(){
        // 输入流
        let myAudio = document.querySelector('#myAudio');// 播放音频

        // 创建音频上下文对象（音频API）
        let audioCxt = new (window.AudioContext || window.webkitAudioContext)();;
        
        // 创建分析机，分析音频对象，进行后续的音频加工处理
        let analyser = audioCxt.createAnalyser();

        // 创建媒体源，除了audio本身可以获取，也可以通过audioCxt对象提供的api进行媒体资源的获取
        let audioSource = audioCxt.createMediaElementSource(myAudio);
        // 媒体源和分析机连接
        audioSource.connect(analyser);

        // 输出的目标：将分析机分出来的处理结果与目标点（耳机、扬声器）连接
        analyser.connect(audioCxt.destination);
        // 效果
        // 处理音频
        // Uint8Array 缓冲区：进行数据的缓冲处理，转换成二进制数据
        analyser.fftSize = 512; // 设置频谱数据，值越大数据越准确

        // canvas
        let myCanvas = document.querySelector('#myCanvas');
        let context = myCanvas.getContext('2d');

        let width = document.querySelector('.yyn-music') && document.querySelector('.yyn-music').clientWidth;
        let height = document.querySelector('.yyn-music') && document.querySelector('.yyn-music').clientHeight;

        // analyser.frequencyBinCount 默认为 analyser.fftSize 的一半
        let voiceHeight = new Uint8Array(analyser.frequencyBinCount);
        const meterWidth = 5;
        const minHeight = 2;
        const count = 220; // 绘制条数
        const cr = 150; // 圆的半径
        const PI = Math.PI;

        // canvas线性渐变
        let color = context.createLinearGradient(0, -cr, 0, -width / 2);

        this.audioCxt = audioCxt;
        this.analyser = analyser;
        this.myCanvas = myCanvas;
        this.context = context;
        this.width = width;
        this.height = height;
        this.voiceHeight = voiceHeight;
        this.meterWidth = meterWidth;
        this.minHeight = minHeight;
        // this.type = 'histogram';
        this.type = 'circle';
        this.count = this.type === 'circle' ? 180 : count;
        this.cr = cr;
        this.PI = PI;
        this.color = color;
        this.animationIndex = null;
    }
    init(){
        // 设置canvas信息
        this.myCanvas.width = this.width;
        this.myCanvas.height = this.height;

        const themeColor = getInfoFromLocalStorage('setting', 'themeColor');

        // 设置渐变色
        this.color.addColorStop(0, themeColor || '#9648f4'); //5661ef
        this.color.addColorStop(.2, 'green');
        this.color.addColorStop(.5, '#30dffc');
        this.color.addColorStop(1, '#9648f4');
        this.draw();
    }
    draw(){
        // 清除画布
        this.context.clearRect(0, 0, this.width, this.height);
        // 将当前的频率数据复制传入到无符号字节数组中，做到数据的实时连接
        this.analyser.getByteFrequencyData(this.voiceHeight);
        // console.log(this.voiceHeight,99)
        // 自定义获取数组里面的频步
        let step = Math.round(this.voiceHeight.length / this.count); // 10
        // 开始绘制鲸鱼波形图
        if(this.type === 'circle'){
            this.context.save();
            this.context.translate(this.width / 2, this.height / 2);
            for (let i = 0; i < this.count; i++) {
                // 绘制每一个柱状图的频次
                let audioHeight = this.voiceHeight[step * i];
                let meterHeight = audioHeight * (this.height / 2 - this.cr) / 256 || this.minHeight;
                this.context.rotate(2 * this.PI / this.count);
                this.context.fillStyle = this.color;
                // 中间开始绘制
                this.context.fillRect(-this.meterWidth / 2, -this.cr - meterHeight, this.meterWidth, meterHeight);
            }
            this.context.restore();
        }else{
            for (let i = 0; i < this.count; i++) {
                // 绘制每一个柱状图的频次
                let audioHeight = this.voiceHeight[step * i] * 1.5;
                this.context.fillStyle = this.color;
                // 中间开始绘制
                this.context.fillRect(this.width / 2 + (i * 15), this.height - 10, 10, -audioHeight); // 右边
                this.context.fillRect(this.width / 2 - (i * 15), this.height - 10, 10, -audioHeight); // 左边
            }
        }
        this.animationIndex = requestAnimationFrame(this.draw.bind(this));
    }
    destroy(){
        this.context.clearRect(0, 0, this.width, this.height);
        cancelAnimationFrame(this.animationIndex);
    }
}

export default AudioTools;

