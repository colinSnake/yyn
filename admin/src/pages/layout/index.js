import React, { Component } from 'react';
import { Layout } from 'antd';
import SideMenu from './sideMenu';
import Header from './header';
import MainContent from './mainContent';
// import Loading from '../components/loading';
// import config from '../../config/index';

class Main extends Component {
    state = {
        name: 'Tom',
        collapsed: false
    }

    render(){
        return (
            <div className="yyn-wrapper">
                <Layout>
                    <SideMenu collapsed={ this.state.collapsed } />
                    <div className="yyn-content">
                        <Header />
                        <MainContent />
                    </div>   
                </Layout>
                {/* <Loading loadName={ config.loadName } /> */}
            </div>
        )
    }
}


export default Main;
