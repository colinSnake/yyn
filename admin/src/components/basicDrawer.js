import React, { translate, useState } from 'react';
import { connect } from 'react-redux';
import { Drawer, Switch } from 'antd';
import ThemeColor from '@/components/Setting/themeColor';
import { fixHeader, switchBreadCrumb } from '@/redux/actions/setting'; 

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px'
};

const BasicDrawer = props => {
    const [defaultColorTitle, setColorTitle] = useState();
    const { visible, closeDrawer, fixHeader, switchBreadCrumb } = props;
    const onFixHeader = status => {
        fixHeader(status);
    }
    const onSwicthBreadCrumb = status => {
        switchBreadCrumb(status); 
    }
    const getColorTitle = title => {
        setColorTitle(title)
    }
    return(
        <Drawer width={ 300 } title={ translate('system_setting') } placement="right" visible={ visible } closable="true" onClose={ closeDrawer } >
            <p style={ styles }>
                <span>{ translate('fixHeader') }</span> <Switch onChange={ onFixHeader }  />
            </p>
            <p style={ styles }>
                <span>{ translate('bread_crumbs') }</span> <Switch onChange={ onSwicthBreadCrumb }  />
            </p>
            <div className="yyn-drawer-block">
                <div className="theme-title">
                    <h3>{ translate('style_switch') }</h3>
                </div>
                <div className="style-box">
                    <img src={ require('@/assets/svg/blackTheme.svg').default } alt="blackTheme" />
                    <img src={ require('@/assets/svg/whiteTheme.svg').default } alt="blackTheme" />
                </div>
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
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(BasicDrawer);
