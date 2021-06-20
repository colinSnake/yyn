import React, { translate } from 'react';
import logo from  '@/assets/image/logo.png';
import '@/assets/css/components/logo.scss';

const Logo = props => {
    const showItem = () => {
        return (
            props.collapsed ? <img src={ logo } alt="logo" /> : <><img src={ logo } alt="logo" /><h1>{ translate('adminTitle') }</h1></>
        )
    }
    return (
        <div className="yyn-logo">
            { showItem() }
        </div>
    )
}

export default Logo;
