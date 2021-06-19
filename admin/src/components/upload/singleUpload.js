import React from 'react';
import { Upload } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const SingleUpload = props => {
    return (
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <CloudUploadOutlined />
            </p>
            <p className="ant-upload-text">{ React.translate('prompt_cover') }</p>
            <p className="ant-upload-hint">{ React.translate('prompt_upload_format') }</p>
        </Dragger>
    )
}

export default SingleUpload;
