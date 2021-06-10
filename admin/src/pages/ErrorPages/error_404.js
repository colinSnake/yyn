import React from 'react';
import { withRouter } from 'react-router';
import { Button } from 'antd';
import '@/assets/css/pages/error.scss';

const error_404 = props =>  {
    const goBack = () => {
        props.history.push('/dashboard');
    }
    return (
        <div className="yyn-error">
            <div className="error-image error-404"></div> 
            <div className="error-content">
                <h1>{ React.translate('error_404') }</h1>  
                <p className="error-desc">{ React.translate('prompt_404') }</p>
                <p><Button type="primary" onClick={ goBack }>{ React.translate('goBack') }</Button></p>
            </div> 
        </div>
    )
}

export default withRouter(error_404);
