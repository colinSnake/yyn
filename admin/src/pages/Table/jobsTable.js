import React, { translate } from 'react'
import TableItem from '@/components/Table/index';

import '@/assets/css/pages/table.scss'
const JobsTable = props => {
    return (
        <div className="yyn-table">
            <h2 className="yyn-defaultTilte">{ translate('jobsList') }</h2>
            <TableItem />
        </div>
    )
}
export default JobsTable;
