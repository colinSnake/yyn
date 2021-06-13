import React, { PureComponent } from 'react'
import { Form, Input, Button } from 'antd';
import '@/assets/css/pages/form.scss';

const FormItem = Form.Item;
class Jobs extends PureComponent {
    onFinish = () => {

    }
    onFinishFailed = () => {

    }
    render(){
        return (
            <div className="yyn-formWrap">
                <div className="yyn-titleHeader">
                    { React.translate('form_jobs') }
                </div>
                <Form
                    name="jobsForm"
                    className="jobs-form"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 8 }}
                    initialValues={{ remember: true }}
                    onFinish={ this.onFinish }
                    onFinishFailed={ this.onFinishFailed }
                >
                    <FormItem
                        name="title"
                        label={ React.translate('form_job_title') }
                        rules={ [{ required: true, message: React.translate('empty_jobs_title') }] }
                    >
                        <Input placeholder={ React.translate('prompt_job_tilte') } />
                    </FormItem>
                    <FormItem
                        name="title"
                        label={ React.translate('form_job_responsibility') }
                        rules={ [{ required: true, message: React.translate('empty_jobs_responsibility') }] }
                    >
                        <Input placeholder={ React.translate('prompt_job_responsibility') } />
                    </FormItem>
                    <FormItem
                        name="title"
                        label={ React.translate('form_job_requirement') }
                        rules={ [{ required: true, message: React.translate('empty_jobs_requirement') }] }
                    >
                        <Input placeholder={ React.translate('prompt_job_requirement') } />
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

export default Jobs;
