import React from 'react';
import { Table } from 'antd';
import NoData from '@/components/List/noData.js';

const TableItem = props => {
    const columns = props.columns || [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];
    const dataSource = props.dataSource || [
        {
            key: 1,
            name: '不就是个名字吗',
            age: 32,
            address: '四川成都双流区公兴镇99号',
        }
    ]
    return (
        <>
            { dataSource?.length ? <Table columns={ columns } dataSource={ dataSource } /> : <NoData />}
        </>
    )
}

export default TableItem;
