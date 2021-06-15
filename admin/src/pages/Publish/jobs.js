import React, { createRef, PureComponent } from 'react'
import { Form, Input, Button, Select } from 'antd';
import { v4 as uuidv4 } from 'uuid'; 
import RichEditor from '@/components/richEditor';
import '@/assets/css/pages/form.scss';

const FormItem = Form.Item;
const { Option } = Select;
class Jobs extends PureComponent {
    state = {
        categories: [
            { id: uuidv4(), value: '平台运营类' },
            { id: uuidv4(), value: '商务与销售类' },
            { id: uuidv4(), value: '产品技术类' },
            { id: uuidv4(), value: '战略发展类' },
            { id: uuidv4(), value: '公共事务类' },
            { id: uuidv4(), value: '市场类' },
            { id: uuidv4(), value: 'S线支持团队' },
        ],
        form: {
            category: '',
            title: '',
            startTime: '',
            endTime: '',
            responsibilityHtmlText: '',
            requirementHtmlText: ''
        }
    }

    formRef = createRef();

    componentDidMount(){
        const { categories } = this.state;
        this.setState({form: {category: categories.length > 0 && categories[0].value}});
    }

    onFinish = values => {
        const { form } = this.state;
        form.title = values && values.title;
        console.log(form)
    }

    onFinishFailed = error => {
        console.log('jobs_form_error', error);
    }

    onResetForm = () => {
        const { categories } = this.state;
        this.setState({form: {
            category: categories.length > 0 && categories[0].value,
            title: '',
            responsibilityHtmlText: '',
            requirementHtmlText: ''
        }})
        this.formRef.current && this.formRef.current.resetFields();
    }

    onSelect = value => {
        if(value) this.setState({form: {category: value }});
    }

    getRichEidtorHtmlText = (param) => {
        if(param.type === 'responsibility'){
            this.setState({form: { responsibilityHtmlText: param.html }});
        }else{
            this.setState({form: {requirementHtmlText: param.html}});
        }
    }

    createRichEditorParam = (type) => {
        return {
            type: type,
            showMoreFormat: false,
            placeholder: React.translate(`prompt_job_${type}`),
            getRichEidtorHtmlText: this.getRichEidtorHtmlText
        }
    }

    render(){
        const { categories, form } = this.state;
        form.category = categories.length > 0 && categories[0].value;
        return (
            <div className="yyn-formWrap yyn-shadow">
                <div className="yyn-titleHeader">
                    { React.translate('form_jobs') }
                </div>
                <Form
                    name="jobsForm"
                    className="jobs-form"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={ this.onFinish }
                    initialValues={{
                        category: form.category
                    }}
                    onFinishFailed={ this.onFinishFailed }
                    ref={ this.formRef }
                >
                    <FormItem
                        name="category"
                        label={ React.translate('form_job_category') }
                    >
                        <Select style={{ width: 280 }} onSelect={ this.onSelect }>
                            { categories.length > 0 && categories.map(item => (
                                <Option key={ item.id } value={ item.value }>{ item.value }</Option>
                            ))}
                        </Select>
                    </FormItem>
                    <FormItem
                        name="title"
                        label={ React.translate('form_job_title') }
                        rules={ [{ required: true, message: React.translate('empty_jobs_title') }] }
                    >
                        <Input style={{ width: 280 }} placeholder={ React.translate('prompt_job_tilte') } />
                    </FormItem>
                    <FormItem
                        name="responsibility"
                        label={ React.translate('form_job_responsibility') }
                    >
                        <RichEditor param={ this.createRichEditorParam('requirement') } />
                    </FormItem>
                    <FormItem
                        name="requirement"
                        label={ React.translate('form_job_requirement') }
                    >
                        <RichEditor param={ this.createRichEditorParam('requirement') } />
                    </FormItem>
                    <FormItem
                        className="hideLabel"
                        label="~"
                        >
                        <Button type="primary" htmlType="submit" style={{ marginRight: '20px' }}>{ React.translate('submit_button') }</Button>  
                        <Button type="primary" htmlType="button" onClick={ this.onResetForm }>{ React.translate('reset_button') }</Button>  
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default Jobs;
