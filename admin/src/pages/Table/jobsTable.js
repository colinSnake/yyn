import React from 'react'
import TableItem from '@/components/Table/index';

import '@/assets/css/pages/table.scss'
const JobsTable = props => {
    return (
        <div className="yyn-table">
            <h2 className="yyn-defaultTilte">新闻列表</h2>
            <TableItem />
        </div>
    )
}
export default JobsTable;
