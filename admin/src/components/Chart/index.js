import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import * as echarts from 'echarts';
class BaiscChart extends PureComponent{
    static propTypes = {
		width: PropTypes.string.isRequired,
		height: PropTypes.string.isRequired,
		className: PropTypes.string.isRequired,
		style: PropTypes.object.isRequired,
		chartData: PropTypes.object.isRequired
	}

    static defaultProps = {
		width: '100%',
		height: '340px',
		className: 'chart-box',
		style: {},
		chartData: {}
	}

    state = { chart: null }

    componentDidMount(){
        console.log(this.el,999)
        setTimeout(() => {
            this.initChart();
        }, 500);
        window.addEventListener('resize', () => this.resetChart());
    }

    initChart = () => {
        if (!this.el) return;
		this.setState(
			{
				chart: echarts.init(this.el, 'macarons')
			},
			() => {
				this.state.chart.setOption(this.props.chartData, true);
			}
		);
    }

    resetChart = () => {
        console.log(this.el.clientWidth,'222')
        const { chart } = this.state;
		if (chart) {
            setTimeout(() => {
                this.initChart();
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
