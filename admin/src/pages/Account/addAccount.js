import React, { createRef } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import '@/assets/css/pages/form.scss';

const FormItem = Form.Item;
const AddAccount = props => {
    const formRef = createRef();
    const onChangePublishTime = () => {

    }
    const onResetForm = () => {

    }
    const onFinish = () => {

    }
    return (
        <div className="yyn-formWrap yyn-shadow">
            <div className="yyn-titleHeader">
                { React.translate('form_news') }
            </div>
            <Form
                name="addFrom"
                className="add-form"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={ onFinish }
                ref={ formRef }
            >
                <FormItem
                    name="title"
                    label={ React.translate('form_news_title') }
                    rules={ [{ required: true, message: React.translate('empty_news_title') }] }
                >
                    <Input placeholder={ React.translate('prompt_news_title') } />
                </FormItem>
                <FormItem
                    name="publishTime"
                    label={ React.translate('form_news_publishTime') }
                    rules={ [{ required: true, message: React.translate('empty_news_publishTime') }] }
                >
                    <DatePicker placeholder={ React.translate('form_news_publishTime') } onChange={ onChangePublishTime } />
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
                    <Button type="primary" htmlType="button" onClick={ onResetForm }>{ React.translate('reset_button') }</Button>    
                </FormItem>
            </Form>
            </div>
    )
}
export default AddAccount
