import React from 'react';
import { Drawer, Switch } from 'antd';

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px'
};

const BasicDrawer = props => {
    const { visible, closeDrawer } = props;
    const colorList = () => {
        
    }
    return(
        <Drawer title={ React.translate('system_setting') } placement="right" visible={ visible } closable="true" onClose={ closeDrawer } >
            <p style={ styles }>
                <span>{ React.translate('language_switch') }</span> <Switch checked={ false } />
            </p>
            <div className="yyn-theme">
                
            </div>
        </Drawer>
    )
}

export default BasicDrawer;
