import React from 'react';
import '../../assets/css/loading.scss';

const Loading = props => {
    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let loadArr = props.loadName.split('');

    return (
        <div className="yyn-loading" style={ { height: clientHeight }}>
            <div className="loader">
                { loadArr.map((element, index) => {
                   return <span className="dot">{ element }</span>
                }) }
            </div>
        </div>
    )
}

export default Loading;