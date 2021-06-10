import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInfo from '@/components/userInfo';
import CardItem from '@/components/card';
import DateItem from '@/components/date';

import '@/assets/css/pages/dashboard.scss';
class Dashboard extends Component {
    render () {
        return (
            <div className="yyn-dashboard">
                <div className="dashboard-top">
                    <UserInfo />
                    <DateItem />
                </div> 
                <div className="dashboard-content">
                    <CardItem />
                </div>
                <div className="dashboard-footer">
                    <CardItem />
                    <CardItem />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
