import { useState, useEffect, translate, notice } from 'react'
import TableItem from '@/components/Table/index';
import { getJobList } from '@/api';
import { v4 as uuidv4 } from 'uuid';

import '@/assets/css/pages/table.scss'
const JobsTable = props => {
    const columns = [
        {
            title: translate('form_job_category'),
            dataIndex: 'category',
            key: 'category',
            width: 150
        },
        {
            title: translate('form_job_title'),
            dataIndex: 'title',
            key: 'title',
            width: 150
        },
        {
            title: translate('form_job_time'),
            dataIndex: 'date',
            key: 'date',
            width: 240
        },
        {
            title: translate('form_job_responsibility'),
            dataIndex: 'responsibility',
            key: 'responsibility',
            width: 300
        },
        {
            title: translate('form_job_requirement'),
            dataIndex: 'requirement',
            key: 'requirement',
            width: 300
        },
        {
            title: translate('publisher'),
            dataIndex: 'author',
            key: 'author',
            width: 150
        }
    ]

    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const init = async() => {
            const result = await getJobList();
            if(result?.code === '0' && result?.ext){
                let list = result.ext.list;
                list.forEach(item => {
                    item.key = uuidv4();
                    item.responsibility = `${item.responsibility.replace(/<\/?.+?\/?>/g, '').slice(0, 30)}...`;
                    item.requirement = `${item.requirement.replace(/<\/?.+?\/?>/g, '').slice(0, 30)}...`;
                })
                setDataSource(list);
                notice({ description: translate('table_success') }, 'success');
            }else{
                notice({ description: translate('table_failed') }, 'error');
            }
        }
        init();
    }, [])

    return (
        <div className="yyn-table">
            <h2 className="yyn-defaultTilte">{ translate('jobsList') }</h2>
            <TableItem columns={columns} dataSource={dataSource}   />
        </div>
    )
}
export default JobsTable;
