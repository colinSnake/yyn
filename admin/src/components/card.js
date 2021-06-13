import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card } from 'antd';
import '@/assets/css/components/card.scss';

const { Meta } = Card;

const CardItem = props => {
    const cardList = [
        {
            id: uuidv4(),
            imageUrl: require('@/assets/image/card_1.jpeg').default,
            title: '风景1',
            desc: '美丽的风景，需要美丽的人！'
        },
        {
            id: uuidv4(),
            imageUrl: require('@/assets/image/card_2.jpeg').default,
            title: '风景2',
            desc: '美丽的风景，需要美丽的人！'
        },
        {
            id: uuidv4(),
            imageUrl: require('@/assets/image/card_1.jpeg').default,
            title: '风景3',
            desc: '美丽的风景，需要美丽的人！'
        },
        {
            id: uuidv4(),
            imageUrl: require('@/assets/image/card_2.jpeg').default,
            title: '风景4',
            desc: '美丽的风景，需要美丽的人！'
        },

    ]
    return(
        <div class="yyn-card">
            {
                cardList.length > 0 && cardList.map(item => (
                    <Card
                        key={ item.id }
                        hoverable
                        style={ { width: props.width ? props.width : 240 } }
                        cover={ <img alt={ item.title } src={ item.imageUrl } /> }
                    >
                        <Meta title={ item.title } description={ item.desc } />
                    </Card>
                ))
            }
        </div>
    )
}

export default CardItem;

