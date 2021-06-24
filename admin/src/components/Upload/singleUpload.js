import React, { translate } from 'react';
import { Upload, message } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const SingleUpload = props => {
    const uploadInfo = {
        name: 'file',
        multiple: false,
        accept: 'png/jpg/jpeg',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    }
    return (
        <Dragger {...uploadInfo}>
            <p className="ant-upload-drag-icon">
                <CloudUploadOutlined />
            </p>
            <p className="ant-upload-text">{ translate('prompt_cover') }</p>
            <p className="ant-upload-hint">{ translate('prompt_upload_format') }</p>
        </Dragger>
    )
}

export default SingleUpload;
