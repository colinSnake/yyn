import React, { PureComponent } from 'react';
import { getDateTimeStr } from '@/utils/index';
import { v4 as uuidv4 } from 'uuid';
import '@/assets/css/components/date.scss';

let interval = null;
class DateItem extends PureComponent {
    state = {
        timeStr: ''
    }
    componentDidMount(){
        interval = setInterval(() =>{
            this.renderTime();
        }, 1000);
    }
    
    componentWillUnmount(){
        clearInterval(interval);
        interval = null;
    }

    renderTime() {
        let str = getDateTimeStr();
        let timeArr = str.split(' ');
        let leftArr = timeArr.length > 0 && timeArr[0].split('-');
        let rightArr = timeArr.length > 1 && timeArr[1].split(':');
        this.setState({ timeStr: [...this.generate(leftArr, 'yyn-leftDate'), ...this.generate(rightArr, 'yyn-rightDate')]});
    }

    generate(arr, className){
        const format = className === 'yyn-leftDate' ? '/' : ':';
        arr.splice(1, 0, format);
        arr.splice(3, 0, format);
        return arr.length > 0 && arr.map(item => (<span key={ uuidv4() } className={ className || ''}>{item}</span>));
    }

    render(){
        const { timeStr } = this.state;
        return (
            <div className="yyn-date" >
                { timeStr }
            </div>
        )
    }
}

export default DateItem;
