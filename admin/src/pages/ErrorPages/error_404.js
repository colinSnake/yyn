import React, { translate } from 'react';
import { withRouter } from 'react-router';
import { Button } from 'antd';
import '@/assets/css/pages/error.scss';

const error_404 = props =>  {
    const goBack = () => {
        props.history.push('/dashboard');
    }
    return (
        <div className="yyn-error yyn-shadow">
            <div className="error-image error-404"></div> 
            <div className="error-content">
                <h1>{ translate('error_404') }</h1>  
                <p className="error-desc">{ translate('prompt_404') }</p>
                <p><Button type="primary" onClick={ goBack }>{ translate('goBack') }</Button></p>
            </div> 
        </div>
    )
}

export default withRouter(error_404);
