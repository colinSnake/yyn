import React from 'react';
import { connect } from 'react-redux';
import { Drawer, Switch } from 'antd';
import ThemeColor from '@/components/themeColor';
import { fixHeader, switchBreadCrumb } from '@/redux/actions/setting'; 

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px'
};

const BasicDrawer = props => {
    const { visible, closeDrawer, fixHeader, switchBreadCrumb } = props;
    const onFixHeader = status => {
        fixHeader(status);
    }
    const onSwicthBreadCrumb = status => {
        switchBreadCrumb(status); 
    }
    return(
        <Drawer width={ 300 } title={ React.translate('system_setting') } placement="right" visible={ visible } closable="true" onClose={ closeDrawer } >
            <p style={ styles }>
                <span>{ React.translate('fixHeader') }</span> <Switch onChange={ onFixHeader }  />
            </p>
            <p style={ styles }>
                <span>{ React.translate('bread_crumbs') }</span> <Switch onChange={ onSwicthBreadCrumb }  />
            </p>
            <div className="yyn-drawer-block">
                <h3>{ React.translate('themeColor') }</h3>
                <ThemeColor />
            </div>
        </Drawer>
    )
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    fixHeader: data => {
        dispatch(fixHeader(data));
    },
    switchBreadCrumb: data => {
        dispatch(switchBreadCrumb(data));
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(BasicDrawer);
