import React from 'react';

const NoData = props => {
    return (
        <div className="yyn-nodata">
            { props.text || React.translate('nodata') }
        </div>
    )
}

export default NoData;