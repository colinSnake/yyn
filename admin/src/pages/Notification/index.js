import React, { PureComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TabItem from '@/components/List/tabs';
import '@/assets/css/pages/notification.scss';

class Nocification extends PureComponent {
    state = {
        tabList: [
            { id: 1, title: '未读消息' },
            { id: 2, title: '已读消息' }
        ],
        listSource: [
            { 
                id: uuidv4(),
                avatar: require('@/assets/image/defaultAvatar.jpg').default,
                title: '钉钉消息',
                desc: '你的好友给你发来了一条消息，赶快回复ta吧！',
                loading: false
            }
        ]
    }
    
    onChangeTab = (key) => {
        
    }

    onLoadMore = () => {
        const { listSource } = this.state;
        this.setState({ listSource: [...listSource,...listSource] });
    }
    render(){
        const { tabList, listSource } = this.state;
        const { onChangeTab, onLoadMore } = this;
        return (
            <div className="yyn-notification yyn-shadow">
                <TabItem { ...{tabList, listSource, onChangeTab, onLoadMore } } />
            </div>
        )
    }
}

export default Nocification;
