import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import SideMenu from './sideMenu';
import Header from './header';
import MainContent from './mainContent';
import BreadCrumb from './breadCrumb';

class Main extends Component {
    state = {
        collapsed: false,
        fixHeader: false,
    }


    toggleCollapsed = () => {
        const { collapsed } = this.state;
        this.setState({ collapsed: !collapsed });
    }

    render(){
        const { fixHeader } = this.props;
        const { collapsed } = this.state;
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        const style = { height: `${clientHeight-60}px`, paddingTop: fixHeader ? '60px' : '0px' };
        console.log('index', style)
        return (
            <div className="yyn-wrapper">
                <Layout>
                    <SideMenu collapsed={ collapsed }  />
                    <div className="yyn-contentWrap">
                        <div className="yyn-content" style={ style }>
                            <Header toggleCollapsed={ this.toggleCollapsed } collapsed={ collapsed } />
                            <BreadCrumb />
                            <MainContent />
                        </div>
                    </div>   
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(withRouter(Main));
