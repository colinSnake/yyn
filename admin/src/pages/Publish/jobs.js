import { createRef, PureComponent, translate, notice } from 'react'
import { Form, Input, Button, Select, DatePicker } from 'antd';
import { v4 as uuidv4 } from 'uuid'; 
import RichEditor from '@/components/richEditor';
import { publishJobs } from '@/api'; 
import '@/assets/css/pages/form.scss';


const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
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
            date: '',
            responsibilityHtmlText: '',
            requirementHtmlText: '',
            author: '',
            uid: ''
        }
    }

    formRef = createRef();

    onFinish = async values => {
        const { form } = this.state;
        form.title = values && values.title;
        const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
        form.author = userInfo && userInfo.username;
        form.uid = userInfo && userInfo.id;
        const result = await publishJobs(form);
        if(result?.code === '0'){
            notice({ description: translate('publish_success') }, 'success');
            this.onResetForm();
        }else{
            notice({ description: translate('publish_failed') }, 'error');
        }
    }

    onFinishFailed = error => {
        console.log('jobs_form_error', error);
    }

    onResetForm = () => {
        const { categories } = this.state;
        const form = {
            category: categories?.length && categories[0].value,
            title: '',
            date: '',
            responsibilityHtmlText: '',
            requirementHtmlText: '',
            uid: ''
        };
        this.setState({ form })
        this.formRef?.current?.resetFields();
    }

    onSelect = value => {
        if(value) {
            const { form } = this.state;
            form.category = value;
            this.setState({ form: Object.assign({}, form) });
        }
    }

    onChangeDateRange = (date, dateString) => {
        if(dateString?.length){
            const { form } = this.state;
            form.date = dateString?.length && dateString.join('~');
            this.setState({form: Object.assign({}, form)});
        }
    }

    getRichEidtorHtmlText = param => {
        const { form } = this.state;
        if(param.type === 'responsibility'){
            form.responsibilityHtmlText = param.html;
        }else{
            form.requirementHtmlText = param.html
        }
        this.setState({ form: Object.assign({}, form)});
    }

    createRichEditorParam = type => {
        return {
            type: type,
            showMoreFormat: false,
            placeholder: translate(`prompt_job_${type}`),
            getRichEidtorHtmlText: this.getRichEidtorHtmlText
        }
    }

    render(){
        const { categories, form } = this.state;
        form.category = categories?.length && categories[0].value;
        return (
            <div className="yyn-formWrap yyn-shadow">
                <div className="yyn-titleHeader">
                    { translate('publishJobs') }
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
                        label={ translate('form_job_category') }
                    >
                        <Select style={{ width: 280 }} onSelect={ this.onSelect }>
                            { categories.length > 0 && categories.map(item => (
                                <Option key={ item.id } value={ item.value }>{ item.value }</Option>
                            ))}
                        </Select>
                    </FormItem>
                    <FormItem
                        name="title"
                        label={ translate('form_job_title') }
                        rules={ [{ required: true, message: translate('empty_jobs_title') }] }
                    >
                        <Input style={{ width: 280 }} placeholder={ translate('prompt_job_tilte') } />
                    </FormItem>
                    <FormItem
                        name="time"
                        label={ translate('form_job_time') }
                    >
                        <RangePicker style={{ width: '280px' }} onChange={ this.onChangeDateRange } />
                    </FormItem>
                    <FormItem
                        name="responsibility"
                        label={ translate('form_job_responsibility') }
                    >
                        <RichEditor param={ this.createRichEditorParam('responsibility') } />
                    </FormItem>
                    <FormItem
                        name="requirement"
                        label={ translate('form_job_requirement') }
                    >
                        <RichEditor param={ this.createRichEditorParam('requirement') } />
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

export default Jobs;
