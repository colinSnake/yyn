import React from 'react';
import logo from  '@/assets/image/logo.png';
import '@/assets/css/logo.scss';

const Logo = props => {
    const showItem = () => {
        return (
            props.collapsed ? <img src={ logo } alt="logo" /> : <h1>{ React.translate('adminTitle') }</h1>
        )
    }
    return (
        <div className="yyn-logo">
            { showItem() }
        </div>
    )
}

export default Logo;
