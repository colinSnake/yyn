import React, { translate } from 'react';
import { Typography, Divider } from 'antd';
import configUrl from '@/config/basic';
import '@/assets/css/pages/about.scss';
const { Title, Paragraph, Link } = Typography;

const indentStyle = {
    textIndent: '2em'
}
const About = props => {
    const { 
        webpack_url, 
        create_react_app_url,
        react_url,
        react_redux_url,
        react_router_url,
        sass_url,
        es6_url,
        babel_url,
        node_url,
        koa_url,
        mysql_url,
        github_url
    } = configUrl;
    return (
        <div className="yyn-aboutUs yyn-shadow" style={{ fontSize: '14px'}}>
            <Typography>
                <Title level={4}>{ translate('about') }</Title>
                <Paragraph style={ indentStyle }>{ translate('about_content_1') }</Paragraph>
                <Paragraph style={ indentStyle }>{ translate('about_content_2') }</Paragraph>
                <Paragraph style={ indentStyle }>{ translate('about_content_3') }</Paragraph>
                <Divider />
                <Title level={4}>{ translate('technology_system') }</Title>
                <Paragraph>
                    <ul>
                        <li>
                            <Link href={ webpack_url } target="_blank">{ translate('webpack') }</Link>
                        </li>
                        <li>
                            <Link href={create_react_app_url } target="_blank">{ translate('create_react_app') }</Link>
                        </li>
                        <li>
                            <Link href={ react_url } target="_blank">{ translate('react') }</Link>
                        </li>
                        <li>
                            <Link href={ react_redux_url } target="_blank">{ translate('react_redux') }</Link>
                        </li>
                        <li>
                            <Link href={ react_router_url } target="_blank">{ translate('react_router') }</Link>
                        </li>
                        <li>
                            <Link href={ sass_url } target="_blank">{ translate('sass') }</Link>
                        </li>
                        <li>
                            <Link href={ es6_url } target="_blank">{ translate('es6') }</Link>
                        </li>
                        <li>
                            <Link href={ babel_url } target="_blank">{ translate('babel') }</Link>
                        </li>
                        <li>
                            <Link href={ node_url } target="_blank">{ translate('node') }</Link>
                        </li>
                        <li>
                            <Link href={ koa_url } target="_blank">{ translate('koa') }</Link>
                        </li>
                        <li>
                            <Link href={ mysql_url } target="_blank">{ translate('mysql') }</Link>
                        </li>
                    </ul>
                </Paragraph>
                <Divider />
                <Title level={4}>{ translate('github') }</Title>
                <ul>
                    <li><Link href={ github_url }>{ translate('git_code') }</Link></li>
                </ul>
            </Typography>
        </div>
    )
}

export default About;
