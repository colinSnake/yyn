import React, { createRef, PureComponent, translate } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import SingleUpload from '@/components/Upload/singleUpload';
import '@/assets/css/pages/form.scss';

const FormItem = Form.Item;
class News extends PureComponent{
    state = {
        form: {
            title: '',
            cover: '',
            publishTime: '',
            updateTime: '',
            network: '',
            originUrl: ''
        }
    }

    formRef = createRef();

    onFinish = values => {
        console.log(values,'news_form')
    }

    onFinishFailed = error => {
        console.log('news_form_error', error);
    } 

    onChangePublishTime = (date, dateString) => {

    }
    
    onChangeUpdateTime = (date, dateString) => {

    }

    onResetForm = () => {
        this.formRef.current && this.formRef.current.resetFields();
    }

    callback = fileUrl => {
        const { form } = this.state;
        form.cover = fileUrl;
        this.setState({ form: Object.assign({}, form) });
    }

    render(){
        return (
            <div className="yyn-formWrap yyn-shadow">
                <div className="yyn-titleHeader">
                    { translate('publishNews') }
                </div>
                <Form
                    name="newsFrom"
                    className="news-form"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 8 }}
                    initialValues={{ remember: true }}
                    onFinish={ this.onFinish }
                    ref={ this.formRef }
                >
                    <FormItem
                        name="title"
                        label={ translate('form_news_title') }
                        rules={ [{ required: true, message: translate('empty_news_title') }] }
                    >
                        <Input placeholder={ translate('prompt_news_title') } />
                    </FormItem>
                    <FormItem
                        name="cover"
                        label={ translate('form_news_cover') }
                        rules={ [{ required: true, message: translate('empty_news_cover') }] }
                    >
                        <SingleUpload callback={ this.callback } />
                    </FormItem>
                    <FormItem
                        name="publishTime"
                        label={ translate('form_news_publishTime') }
                        rules={ [{ required: true, message: translate('empty_news_publishTime') }] }
                    >
                        <DatePicker placeholder={ translate('form_news_publishTime') } onChange={ this.onChangePublishTime } />
                    </FormItem>
                    <FormItem
                        name="updateTime"
                        label={ translate('form_news_updateTime') }
                    >
                        <DatePicker placeholder={ translate('form_news_updateTime') } onChange={ this.onChangeUpdateTime } />
                    </FormItem>
                    <FormItem
                        name="network"
                        label={ translate('form_news_network') }
                        rules={ [{ required: true, message: translate('empty_news_network') }] }
                    >
                        <Input placeholder={ translate('prompt_news_network') } />
                    </FormItem>
                    <FormItem
                        name="originUrl"
                        label={ translate('form_news_origin') }
                        rules={ [{ required: true, message: translate('empty_news_origin') }] }
                    >
                        <Input placeholder={ translate('prompt_news_origin') } />
                    </FormItem>
                    <FormItem 
                        className="hideLabel"
                        label="~"
                    >
                        <Button type="primary" htmlType="submit" style={{ marginRight: '20px' }}>{ translate('submit_button') }</Button>  
                        <Button type="primary" htmlType="button" onClick={ this.onResetForm }>{ translate('reset_button') }</Button>    
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default News;
