import React from 'react';
import { Empty } from 'antd';
const NoData = props => {
    const fontStyle = {
        fontSize: '14px',
        color: '#ccc'
    }
    return (
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
                marginTop: 100,
                height: 70,
            }}
            description={
                <span style={ fontStyle }>
                    { props.text || React.translate('nodata') }
                </span>
            }
        />
    )
}

export default NoData;
