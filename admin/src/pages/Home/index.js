/*
 * @,@Descripttion: ,: 
 * @,@version: ,: 
 * @,@Author: ,: Magic
 * @,@Date: ,: 2021-05-31 00:24:18
 * @,@LastEditors: ,: Magic
 * @,@LastEditTime: ,: 2021-05-31 00:30:49
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class index extends Component {
    render() {
        return (
            <div>
                <>
                <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
                </Layout>

                <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
                </Layout>

                <Layout>
                <Header>Header</Header>
                <Layout>
                    <Content>Content</Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
                </Layout>

                <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
                </Layout>
            </>,
            mountNode
            </div>
        )
    }
};


