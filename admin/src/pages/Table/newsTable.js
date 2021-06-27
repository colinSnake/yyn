import React, { translate } from 'react'
import TableItem from '@/components/Table/index';

import '@/assets/css/pages/table.scss'
const NewsTable = props => {
    return (
        <div className="yyn-table">
            <h2 className="yyn-defaultTilte">{ translate('newsList') }</h2>
            <TableItem />
        </div>
    )
}
export default NewsTable;
