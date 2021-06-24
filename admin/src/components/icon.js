import React from 'react';
import { connect } from 'react-redux';

const Icon = props => {
    let { iconName, size, hasColor, themeStyle } = props;
    iconName = hasColor ? `${iconName}-${themeStyle === 'dark' ? 'light' : 'dark'}` : iconName;
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

const mapStateToProps = state => {
    return {
        themeStyle: state.themeStyle
    }
}

export default connect(mapStateToProps)(Icon);
