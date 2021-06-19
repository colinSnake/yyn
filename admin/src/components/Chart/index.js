import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import * as echarts from 'echarts';
class BaiscChart extends PureComponent{
    static propTypes = {
		width: PropTypes.string.isRequired,
		height: PropTypes.string.isRequired,
		className: PropTypes.string.isRequired,
		style: PropTypes.object.isRequired,
		option: PropTypes.object.isRequired
	}

    static defaultProps = {
		width: '100%',
		height: '340px',
		className: 'chart-box',
		style: {},
		option: {}
	}

    state = { chart: null }

    componentDidMount(){
        setTimeout(() => {
            this.initChart();
        }, 500);
        window.addEventListener('resize', () => this.resetChart());
    }

    componentWillUnmount(){
        window.removeEventListener('resize', () => this.resetChart());
    }

    initChart = () => {
        const { option } = this.props;
        if (!this.el) return;
		this.setState(
			{
				chart: echarts.init(this.el, 'dark', {renderer: 'cavans'})
			},
			() => {
				option && this.state.chart.setOption(option, true);
			}
		);
    }

    resetChart = () => {
        const { chart } = this.state;
		if (chart) {
            setTimeout(() => {
                chart.resize();
            }, 500);
		}
    }

    render(){
        const { className, style } = this.props;
        return(
            <div className={ className } ref={ el => (this.el = el) } style={ style } ></div>
        )
    }
}

export default BaiscChart;
