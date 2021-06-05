import React from 'react';
import { Drawer, Switch } from 'antd';

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px'
};

const BasicDrawer = props => {
    return(
        <>
            <Drawer title={ React.translate('system_setting') } placement="right" closable="true" onClose={ } >
                <p style={ styles }>
                    <span>{ React.translate('theme_switch') }</span> <Switch />
                </p>
                <p style={ styles }>
                    <span>{ React.translate('bread_crumbs') }</span> <Switch />
                </p>
                <p style={ styles }>
                    <span>{ React.translate('multi_tab') }</span> <Switch />
                </p>
            </Drawer>
        </>
    )
}

export default BasicDrawer;