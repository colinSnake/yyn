import React from 'react';
import { Tabs } from 'antd';
import NoData from './noData';
import StandardList from './list';

const { TabPane } = Tabs;
const TabItem = props => {
    const { tabList, listSource, onChangeTab, onLoadMore } = props;
    const defaultKey = tabList && tabList.length > 0 ? tabList[0].id : 1;
    return(
        <Tabs defaultActiveKey={ defaultKey } onChange={ onChangeTab }>
            { tabList && tabList.length > 0 && tabList.map(item => (
                <TabPane tab={ item.title } key={ item.id }>
                    { item.id === 1 ? <StandardList listSource={ listSource } onLoadMore={ onLoadMore } /> : <NoData /> }
                </TabPane>
            ))}
        </Tabs>
    )
}

export default TabItem;
