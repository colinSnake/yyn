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
    return(
        <Drawer title={ React.translate('system_setting') } placement="right" visible={ visible } closable="true" onClose={ closeDrawer } >
            <p style={ styles }>
                <span>{ React.translate('language_switch') }</span> <Switch checked={ props.checked } onChange={ props.onSwitchLanguage } />
                {/* <span>{ React.translate('theme_switch') }</span> <Switch /> */}
            </p>
            {/* <p style={ styles }>
                <span>{ React.translate('bread_crumbs') }</span> <Switch />
            </p>
            <p style={ styles }>
                <span>{ React.translate('multi_tab') }</span> <Switch />
            </p> */}
        </Drawer>
    )
}

export default BasicDrawer;
