import React from 'react'
import BasicChart from '@/components/Chart/index';
const HistogramChart = props => {
    const option =  {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
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
export default HistogramChart;
