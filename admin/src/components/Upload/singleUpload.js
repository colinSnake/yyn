import { translate, notice, useState } from 'react';
import { Upload } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import api from '@/config/api';

const { Dragger } = Upload;
const SingleUpload = props => {
    const { callback } = props;
    const [fileUrl, setFileUrl] = useState('');
    const uploadInfo = {
        name: 'file',
        multiple: false,
        accept: 'png/jpg/jpeg',
        action: `${api.domain}/api/admin/upload`,
        maxCount: 1,
        method: 'post',
        onChange(res) {
            const { status, response } = res.file;
            if (status !== 'uploading') {
                if(response && response.ext){
                    setFileUrl(response.ext.url);
                    callback(fileUrl);
                }
            }
            if (status === 'done') {
                notice({ description: translate('upload_success') }, 'success');
            } else if (status === 'error') {
                notice({ description: translate('upload_failed') }, 'error');
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
        onRemove(e){
            setFileUrl('');
            callback(fileUrl);
        }
    }
    return (
        <Dragger {...uploadInfo}>
            { fileUrl ? <img className="upload-image" src={ fileUrl } alt="cover" /> :
                <>
                    <p className="ant-upload-drag-icon">
                    <CloudUploadOutlined />
                    </p>
                    <p className="ant-upload-text">{ translate('prompt_cover') }</p>
                    <p className="ant-upload-hint">{ translate('prompt_upload_format') }</p>
                </>
            }
        </Dragger>
    )
}

export default SingleUpload;
