import React from 'react';

const Icon = props => {
    const type = 'white';
    let { iconName, size } = props;
    size = size || 1.5;
    iconName = iconName + '-' + type;
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
