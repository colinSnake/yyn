import React from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import NoData from './noData';

const ListItem = List.Item; 
const Meta = ListItem.Meta;

const StandardList = props => {
    const initLoading = false;
    const loading = false;
    const { listSource, onLoadMore, needActions } = props;
    const loadMore = !initLoading && !loading ? (
        <div
            style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
            }}
        >
            <Button type="primary" onClick={ onLoadMore }>点击加载更多</Button>
        </div>
    ) : null;
    let actions = needActions ? [<Button>标记已读</Button>] : null;
    return(
        <>
            {
                listSource && listSource.length > 0 ? (
                    <List
                        loading={ initLoading }
                        itemLayout="horizontal"
                        loadMore={ loadMore }
                        dataSource={ listSource }
                        renderItem={item => (
                            <ListItem
                                key={ item.id }
                                actions={ actions }
                            >
                                <Skeleton avatar loading={ item.loading } active>
                                    <Meta
                                        avatar={
                                            <Avatar src={ item.avatar } />
                                        }
                                        title={ item.title }
                                        description={ item.desc }
                                    />
                                </Skeleton>
                            </ListItem>
                        )}
                    />) : <NoData />
            }
        </>
    )
}

export default StandardList;
