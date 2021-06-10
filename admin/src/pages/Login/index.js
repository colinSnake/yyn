import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Particles from 'react-particles-js';

import '@/assets/css/pages/login.scss'

const FormItem = Form.Item;
class Login extends Component {
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
        return (
            <div className="yyn-wrapper">
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
                    <h1>{ React.translate('adminTitle') }</h1>
                    <Form 
                        name="loginForm"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={ this.onFinish }
                        onFinishFailed={ this.onFinishFailed }
                    >
                        <FormItem
                            name="username"
                            rules={ [{ required: true, message: React.translate('prompt_username') }] }
                        >
                            <Input prefix={ <UserOutlined className="site-form-item-icon" /> } placeholder={ React.translate('username') } />
                        </FormItem>
                        <FormItem
                            name="password"
                            rules={ [{ required: true, message: React.translate('prompt_password') }] }
                        >
                            <Input
                                prefix={ <LockOutlined className="site-form-item-icon" /> }
                                type="password"
                                placeholder={ React.translate('password') }
                            />
                        </FormItem>
                        <FormItem>
                            <Button htmlType="submit" block className="login-form-button">
                                { React.translate('login') }
                            </Button>
                            <p className="login-tips">{ React.translate('prompt_tips') }</p>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
