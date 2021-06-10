import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '@/assets/css/components/themeColor.scss';

const ThemeColor = props => {
    const colorList = [
        { id: uuidv4(), title: '拂晓蓝(默认)', selected: true , color: `rgb(24, 144, 255)` },
        { id: uuidv4(), title: '混动红', selected: false , color: `rgb(245, 34, 45)` },
        { id: uuidv4(), title: '心动橙', selected: false , color: `rgb(250, 84, 28)` },
        { id: uuidv4(), title: '日暮黄', selected: false , color: `rgb(250, 173, 20)` },
        { id: uuidv4(), title: '闪耀青', selected: false , color: `rgb(19, 194, 194)` },
        { id: uuidv4(), title: '极光绿', selected: false , color: `rgb(82, 196, 26)` }, 
        { id: uuidv4(), title: '深海蓝', selected: false , color: `rgb(47, 84, 235)` },
        { id: uuidv4(), title: '自由紫', selected: false , color: `rgb(114, 46, 209)` }
    ]
    return (
        <div className="yyn-themeColor">
            {
                colorList && colorList.map(item => (<span title={ item.title.slice(0,3) } key={ item.id } className="color-block" style={ { background: item.color }}></span>))
            }
        </div>
    )
}

export default ThemeColor;