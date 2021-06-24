import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';

class FullScreen extends PureComponent {
    state = {
        isFullScreen: false
    }
    componentDidMount(){
        this.watchFullScreen();
    }
    onChangeFullScreen = (status) => {
        const { isFullScreen } = this.state;
        isFullScreen ? this.exitFullScreen() : this.requestFullScreen();
        this.setState({isFullScreen: !isFullScreen});
    }
    // 进入全屏
    requestFullScreen(){
        let el = document.documentElement;
		if (el.requestFullscreen) {
			el.requestFullscreen();
		} else if (el.mozRequestFullScreen) {
			el.mozRequestFullScreen();
		} else if (el.webkitRequestFullScreen) {
			el.webkitRequestFullScreen();
		}
    }
    // 退出全屏
    exitFullScreen(){
        let el = document;
		if (el.exitFullscreen) {
			el.exitFullscreen();
		} else if (el.mozCancelFullScreen) {
			el.mozCancelFullScreen();
		} else if (el.webkitCancelFullScreen) {
			el.webkitCancelFullScreen();
		}
    }
    // 监听fullscreenchange事件
	watchFullScreen = () => {
		document.addEventListener(
			'fullscreenchange',
			() => {
				this.setState({ isFullScreen: document.fullscreen });
			},
			false
		);
		document.addEventListener(
			'mozfullscreenchange',
			() => {
				this.setState({ isFullScreen: document.mozFullScreen });
			},
			false
		);
		document.addEventListener(
			'webkitfullscreenchange',
			() => {
				this.setState({ isFullScreen: document.webkitIsFullScreen });
			},
			false
		);
	};
    render() {
        const { isFullScreen } = this.state;
		const { themeStyle } = this.props;
		const iconColorStyle = { color: themeStyle === 'light' ? '#001529' : '#fff' };
        return(
            <div className="yyn-fullscreen" onClick={ this.onChangeFullScreen } > 
                { isFullScreen ? <FullscreenExitOutlined style={ iconColorStyle } /> : <FullscreenOutlined style={ iconColorStyle } /> }
            </div>
        )
    }
}

const mapStateToProps = state => {
	return{
		themeStyle: state.themeStyle
	}
}

export default connect(mapStateToProps)(FullScreen);
