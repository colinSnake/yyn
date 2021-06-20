import React, { createRef, translate } from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import '@/assets/css/pages/form.scss';

const FormItem = Form.Item;
const { Option } = Select;
const AddAccount = props => {
    let dateStr = '';
    const permissionList = [
        {
            id: 1,
            value: translate('permission_all'),
            disabled: true,
        },
        {
            id: 2,
            value: translate('permission_part'),
            disabled: false,
        }
    ];
    const formRef = createRef();
    const onFinish = value => {
        let permissionType = permissionList && permissionList.length> 0 && permissionList.filter(item => item.value === value.permission)[0].id;
        let form = {
            permission: permissionType || 1,
            createTime: dateStr ? dateStr : value.createTime,
            username: value.username,
            password: value.password
        };
        console.log('account', form);
    }
    const onChange = (date, dateString) => {
        if(dateString) dateStr = dateString;
    }
    const onResetForm = () => {
        formRef.current && formRef.current.resetFields()
    }
    return (
        <div className="yyn-formWrap yyn-shadow">
            <div className="yyn-titleHeader">
                { translate('add_child_account') }
            </div>
            <Form
                name="addFrom"
                className="add-form"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ 
                    remember: true,
                    permission: permissionList.length > 1 && permissionList[1].value,
                    password: 123456
                }}
                onFinish={ onFinish }
                ref={ formRef }
            >
                <FormItem
                    name="permission"
                    label={ translate('child_account_permission') }
                >
                    <Select>
                            { permissionList.length > 0 && permissionList.map(item => (
                                <Option key={ item.id } value={ item.value } disabled={ item.disabled }>{ item.value }</Option>
                            ))}
                    </Select>
                </FormItem>
                <FormItem
                    name="createTime"
                    label={ translate('child_account_password') }
                    rules={ [{ required: true, message: translate('child_account_time') }] }
                >
                    <DatePicker style={{ width: '100%' }} placeholder={ translate('child_account_time') } onChange={ onChange } />
                </FormItem>
                <FormItem
                    name="username"
                    label={ translate('child_account_name') }
                    rules={ [{ required: true, message: translate('empty_account_name') }] }
                >
                    <Input placeholder={ translate('prompt_account_name') } maxLength={8} />
                </FormItem>
                <FormItem
                    name="password"
                    label={ translate('child_account_password') }
                    rules={ [{ required: true, message: translate('empty_account_password') }] }
                >
                    <Input placeholder={ translate('prompt_account_password') } maxLength={8} />
                </FormItem>
                <FormItem 
                    className="hideLabel"
                    label="~"
                >
                    <Button type="primary" htmlType="submit" style={{ marginRight: '20px' }}>{ translate('submit_button') }</Button>  
                    <Button type="primary" htmlType="button" onClick={ onResetForm }>{ translate('reset_button') }</Button>    
                </FormItem>
            </Form>
            </div>
    )
}
export default AddAccount
