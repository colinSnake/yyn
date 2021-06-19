import React from 'react'
import BasicChart from '@/components/Chart/index';
const LineChart = props => {
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }]
    }
    const style = {
        height: '500px'
    }
    return (
        <div className="yyn-chart yyn-shadow">
            <BasicChart { ...{ option, style } } />
        </div>
    )
}
export default LineChart;
