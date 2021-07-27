import { useRef, translate, notice } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { addAccount } from '@/api';
import '@/assets/css/pages/form.scss';

const FormItem = Form.Item;
const { Option } = Select;
const AddAccount = props => {
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
    const formRef = useRef('add-form');

    const onFinish = async(value) => {
        let current = permissionList?.length && permissionList.filter(item => item.value === value.permission);
        let form = {
            type: (current?.length && current[0].id) || 1,
            username: value.username,
            password: value.password
        };
        const result = await addAccount(form);
        if(result?.code === '0'){
            notice({description: translate('add_account_success') }, 'success');
            onResetForm();
        }else{
            notice({description: translate('add_account_failed') }, 'error');
        }
    }
    const onResetForm = () => {
        formRef.current?.resetFields();
    }
    return (
        <div className="yyn-formWrap yyn-shadow">
            <div className="yyn-titleHeader">
                { translate('addAccount') }
            </div>
            <Form
                name="addFrom"
                className="add-form"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ 
                    remember: true,
                    permission: permissionList.length > 1 && permissionList[1].value,
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
