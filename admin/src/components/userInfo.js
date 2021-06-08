import React from 'react';
import { Avatar } from 'antd';
import defaultAvatar from '@/assets/image/defaultAvatar.jpg';
import '@/assets/css/components/userInfo.scss';

const UserInfo = props => {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};
    const { nickName } = userInfo;
    return (
        <div className="yyn-userInfo">
            <Avatar size={ 80 } src={ defaultAvatar } />
            <div className="basic-info">
                <h2>{ React.translate('prompt_user', {name: nickName}) }</h2>
                <p className="yyn-motto">{ React.translate('prompt_motto', { motto: '长风破浪会有时，直挂云帆济沧海。'}) }</p>
            </div>
        </div>
    )
}

export default UserInfo;
