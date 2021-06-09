import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import SideMenu from './sideMenu';
import Header from './header';
import MainContent from './mainContent';
import config from '@/config/index';

class Main extends Component {
    state = {
        collapsed: false,
        fixHeader: false,
        clientHeight: document.documentElement.clientHeight || document.body.clientHeight
    }


    toggleCollapsed = () => {
        const { collapsed } = this.state;
        this.setState({ collapsed: !collapsed });
    }

    render(){
        const { fixHeader } = this.props;
        const { collapsed, clientHeight } = this.state;
        return (
            <div className="yyn-wrapper">
                <Layout>
                    <SideMenu collapsed={ collapsed }  />
                    <div className="yyn-content" style={{ height: clientHeight, paddingTop: fixHeader ? '60px' : '0px'}}>
                        <Header 
                            toggleCollapsed={ this.toggleCollapsed }
                        />
                        
                        <MainContent  />
                    </div>   
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = state => state;


const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
