import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import SideMenu from './sideMenu';
import Header from './header';
import MainContent from './mainContent';
import Loading from '@/components/loading';
import config from '@/config/index';

class Main extends Component {
    state = {
        collapsed: false
    }

    toggleCollapsed = () => {
        const { collapsed } = this.state;
        this.setState({ collapsed: !collapsed });
    }

    render(){
        return (
            <div className="yyn-wrapper">
                <Layout>
                    <SideMenu collapsed={ this.state.collapsed } />
                    <div className="yyn-content">
                        <Header toggleCollapsed={ this.toggleCollapsed } />
                        <MainContent />
                    </div>   
                </Layout>
                {/* <Loading loadName={ config.loadName } /> */}
            </div>
        )
    }
}

const mapStateToProps = state => {

}


const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
