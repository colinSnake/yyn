import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import SideMenu from './sideMenu';
import Header from './header';
import MainContent from './mainContent';
import BreadCrumb from './breadCrumb';
import { switchThemeColor }  from '@/redux/actions/setting';

class Main extends Component {
    state = {
        collapsed: false,
        clientHeight: document.documentElement.clientHeight || document.body.clientHeight
    }

    componentDidMount(){
        this.getSelectedThemeColor();
        window.addEventListener('resize', this.onRisize);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.onRisize);
    }

    getSelectedThemeColor(){
        const { switchThemeColor } = this.props;
        const selectedThemeColor = localStorage.getItem('themeColor') ? JSON.parse(localStorage.getItem('themeColor')) : null;
        if(selectedThemeColor){
            switchThemeColor(selectedThemeColor.color);
        }
    }

    toggleCollapsed = () => {
        const { collapsed } = this.state;
        this.setState({ collapsed: !collapsed });
    }

    onRisize = () => {
        this.setState({ clientHeight: document.documentElement.clientHeight || document.body.clientHeight })
    }

    render(){
        const { showHeader, showBreadCrumb, themeStyle } = this.props;
        const { collapsed, clientHeight } = this.state;
        const style = { height: `${clientHeight-60}px`, paddingTop: showHeader ? '60px' : '0px' };
        const realHeight = `${clientHeight}px`;
        return (
            <div className={ `${themeStyle} yyn-wrapper` } style={{ height: realHeight }}>
                <Layout>
                    <SideMenu style={{ height: realHeight }} collapsed={ collapsed }  />
                    <div className="yyn-contentWrap" style={{ height: realHeight }}>
                        <div className="yyn-content" style={ style }>
                            <Header toggleCollapsed={ this.toggleCollapsed } collapsed={ collapsed } />
                            { showBreadCrumb ? <BreadCrumb /> : null}
                            <MainContent />
                        </div>
                    </div>   
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        themeStyle: state.themeStyle
    }
};
const mapDispatchToProps = dispatch => ({
    switchThemeColor: data => {
        dispatch(switchThemeColor(data))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
