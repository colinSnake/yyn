import React, { PureComponent, translate } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Particles from 'react-particles-js';

import '@/assets/css/pages/login.scss'

const FormItem = Form.Item;
class Login extends PureComponent {
    state = {
        clientHeight: document.documentElement.clientHeight || document.body.clientHeight
    }

    onRisize = () => {
        this.setState({ clientHeight: document.documentElement.clientHeight || document.body.clientHeight })
    }

    onFinish = (values) => {
        const { username, password } = values;
        if(username && password){
            let userInfo = {
                username,
                password,
                nickName: 'Ming',
                isLogin: true,
                avatar: require('@/assets/image/defaultAvatar.jpg').default,
                motto: '长风破浪会有时，直挂云帆济沧海',
                position: '前端工程师',
                department: 'Sobey-视频产品研发中心-移动产品研发部',
                address: '四川省成都市'
            }
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            this.props.history.push('/dashboard');
        }
    }
    
    onFinishFailed = (error) => {
        console.log(error)
    }

    componentDidMount(){
        window.addEventListener('resize', this.onRisize);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.onRisize);
    }

    render() {
        const { themeColor } = this.props;
        return (
            <div className="yyn-wrapper" style={{ background: themeColor }}>
                <Particles
                    height={ this.state.clientHeight - 5 + 'px'}
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}     
                />
                <div className="yyn-container fixed">
                    <h1>{ translate('adminTitle') }</h1>
                    <Form 
                        name="loginForm"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={ this.onFinish }
                        onFinishFailed={ this.onFinishFailed }
                    >
                        <FormItem
                            name="username"
                            rules={ [{ required: true, message: translate('prompt_username') }] }
                        >
                            <Input prefix={ <UserOutlined className="site-form-item-icon" /> } placeholder={ translate('username') } />
                        </FormItem>
                        <FormItem
                            name="password"
                            rules={ [{ required: true, message: translate('prompt_password') }] }
                        >
                            <Input
                                prefix={ <LockOutlined className="site-form-item-icon" /> }
                                type="password"
                                placeholder={ translate('password') }
                            />
                        </FormItem>
                        <FormItem>
                            <Button htmlType="submit" block className="login-form-button">
                                { translate('login') }
                            </Button>
                            <p className="login-tips">{ translate('prompt_tips') }</p>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

export default withRouter(connect(mapStateToProps)(Login));
