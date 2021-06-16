import React from 'react';
import { Card, Avatar } from 'antd';
import Icon from './icon';
import '@/assets/css/components/card.scss';

const { Meta } = Card;

const CardItem = props => {
    const { cardWidth, item } = props;
    const style = {
        width: cardWidth || 240 + 'px',
        padding: '0'
    }
    return(
        <Card
            key={ item.id }
            hoverable
            style={ style }
        >
            <Meta 
                avatar={
                    <Icon iconName={ item.icon } size={ 2.5 } />
                }
                title={ item.title } 
                description={ item.desc } 
            />
        </Card>
    )
}

export default CardItem;

