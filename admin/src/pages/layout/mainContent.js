import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

class MainContent extends Component {

    
    render(){
        return (
            <div className="yyn-main">
                <Content>我是主体内容</Content>
            </div>
        )
    }
}

export default MainContent;