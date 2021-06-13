import React from 'react';
import Icon from '@/components/icon';
import '@/assets/css/components/copyRight.scss';

const CopyRight = props => {
    const year = new Date().getFullYear();
    const goGitHub = () => {
        window.open('https://github.com/colinSnake')
    }
    return(
        <div className="yyn-copyright">
            <p onClick={ goGitHub }>Yyn Design Pro&nbsp;&nbsp;<Icon iconName="#icongithub" size="1.2" /></p>
            <p>copyRight&nbsp;<Icon iconName="#iconcopyright" size="1" />&nbsp;{`${year} Written by an interested person`}</p>
        </div>
    )
}

export default CopyRight;
