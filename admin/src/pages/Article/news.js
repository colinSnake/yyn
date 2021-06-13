import React, { PureComponent } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import SingleUpload from '@/components/upload/singleUpload';
import '@/assets/css/pages/form.scss';

const FormItem = Form.Item;
class News extends PureComponent{
    state = {

    }

    onFinish = () => {

    }

    onFinishFailed = () => {

    } 

    onChangePublishTime = () => {

    }
    
    onChangeUpdateTime = () => {

    }

    render(){
        return (
            <div className="yyn-formWrap">
                <div className="yyn-titleHeader">
                    { React.translate('form_news') }
                </div>
                <Form
                    name="newsFrom"
                    className="news-form"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 8 }}
                    initialValues={{ remember: true }}
                    onFinish={ this.onFinish }
                    onFinishFailed={ this.onFinishFailed }
                >
                    <FormItem
                        name="title"
                        label={ React.translate('form_news_title') }
                        rules={ [{ required: true, message: React.translate('empty_news_title') }] }
                    >
                        <Input placeholder={ React.translate('prompt_news_title') } />
                    </FormItem>
                    <FormItem
                        name="cover"
                        label={ React.translate('form_news_cover') }
                        rules={ [{ required: true, message: React.translate('empty_news_cover') }] }
                    >
                        <SingleUpload />
                    </FormItem>
                    <FormItem
                        name="publishTime"
                        label={ React.translate('form_news_publishTime') }
                        rules={ [{ required: true, message: React.translate('empty_news_publishTime') }] }
                    >
                        <DatePicker placeholder={ React.translate('form_news_publishTime') } onChange={ this.onChangePublishTime } />
                    </FormItem>
                    <FormItem
                        name="updateTime"
                        label={ React.translate('form_news_updateTime') }
                    >
                        <DatePicker placeholder={ React.translate('form_news_updateTime') } onChange={ this.onChangeUpdateTime } />
                    </FormItem>
                    <FormItem
                        name="network"
                        label={ React.translate('form_news_network') }
                        rules={ [{ required: true, message: React.translate('empty_news_network') }] }
                    >
                        <Input placeholder={ React.translate('prompt_news_network') } />
                    </FormItem>
                    <FormItem
                        name="originUrl"
                        label={ React.translate('form_news_origin') }
                        rules={ [{ required: true, message: React.translate('empty_news_origin') }] }
                    >
                        <Input placeholder={ React.translate('prompt_news_origin') } />
                    </FormItem>
                    <FormItem 
                        className="hideLabel"
                        label="~"
                    >
                        <Button type="primary" htmlType="submit" style={{ marginRight: '20px' }}>{ React.translate('submit_button') }</Button>  
                        <Button type="primary" htmlType="submit">{ React.translate('reset_button') }</Button>    
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default News;
