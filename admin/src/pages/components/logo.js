import React from 'react';
import logo from  '@/assets/image/logo.png';
import '@/assets/css/logo.scss';

const Logo = props => {
    return (
        <div className="yyn-logo">
            <img src={ logo } alt="logo" />
            <h1>{ React.translate('adminTitle') }</h1>
        </div>
    )
}

export default Logo;