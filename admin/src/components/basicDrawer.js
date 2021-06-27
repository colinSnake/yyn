import React, { translate, useState } from 'react';
import { connect } from 'react-redux';
import { Drawer, Switch, Divider } from 'antd';
import ThemeStyle from '@/components/Setting/themeStyle';
import ThemeColor from '@/components/Setting/themeColor';
import { fixHeader, switchBreadCrumb, switchMultiTab } from '@/redux/actions/setting'; 
import { clearTag } from '@/redux/actions/tags';

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px'
};

const BasicDrawer = props => {
    const [defaultColorTitle, setColorTitle] = useState();
    const { visible, closeDrawer, fixHeader, switchBreadCrumb, switchMultiTab, clearTag, themeStyle } = props;
    const dividerStyle = {
        borderColor: themeStyle === 'dark' ? 'rgba(255, 255, 255, .25)' : 'rgba(0, 0, 0, .25)'
    }
    const onFixHeader = status => {
        fixHeader(status);
    }
    const onSwicthBreadCrumb = status => {
        switchBreadCrumb(status); 
    }
    const onSwitchMultiTab = status => {
        switchMultiTab(status);
        if(!status){
            clearTag();
        }
    }
    const getColorTitle = title => {
        setColorTitle(title);
    }
    return(
        <Drawer 
            className={ props.themeStyle === 'dark' ? 'dark-drawer' : '' }
            width={ 300 } 
            title={ translate('system_setting') } 
            placement="right" 
            visible={ visible } 
            closable="true" 
            onClose={ closeDrawer } >
            <p style={ styles }>
                <span>{ translate('fixHeader') }</span><Switch onChange={ onFixHeader } />
            </p>
            <p style={ styles }>
                <span>{ translate('bread_crumbs') }</span><Switch onChange={ onSwicthBreadCrumb } />
            </p>
            <p style={ styles }>
                <span>{ translate('multi_tab') }</span><Switch onChange={ onSwitchMultiTab } />
            </p>
            <Divider style={ dividerStyle } dashed={ true } />
            <div className="yyn-drawer-block">
                <div className="theme-title">
                    <h3>{ translate('style_switch') }</h3>
                </div>
                <ThemeStyle />
            </div>
            <div className="yyn-drawer-block">
                <div className="theme-title">
                    <h3>{ translate('themeColor') }</h3>
                    <span>({ defaultColorTitle })</span>
                </div>
                <ThemeColor getColorTitle={ getColorTitle } />
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
    },
    switchMultiTab: data => {
        dispatch(switchMultiTab(data));
    },
    clearTag: data => {
        dispatch(clearTag(data));
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(BasicDrawer);
