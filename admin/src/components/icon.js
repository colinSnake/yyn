import React from 'react';

const Icon = props => {
    let { iconName, size } = props;
    size = size || 1.5;
    const style = {
        width: `${size}em`,
        height: `${size}em`
    }
    return (
        <svg style={ style } className="yyn-iconfont" aria-hidden="true">
            <use xlinkHref={ iconName }></use>
        </svg>
    )
}

export default Icon;
