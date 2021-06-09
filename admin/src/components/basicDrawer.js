import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Drawer, Switch } from 'antd';
import { fixHeader } from '@/redux/actions/setting'; 

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px'
};

const BasicDrawer = props => {
    const { visible, closeDrawer, fixHeader } = props;
    const colorList = () => {
        
    }
    const onFixHeader = (status) => {
        fixHeader(status);
    }
    return(
        <Drawer title={ React.translate('system_setting') } placement="right" visible={ visible } closable="true" onClose={ closeDrawer } >
            <p style={ styles }>
                <span>{ React.translate('fixHeader') }</span> <Switch onChange={ onFixHeader }  />
            </p>
            <div className="yyn-theme">
                
            </div>
        </Drawer>
    )
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    fixHeader: data => {
        dispatch(fixHeader(data));
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(BasicDrawer);
