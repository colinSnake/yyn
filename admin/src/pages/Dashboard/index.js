import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInfo from '@/components/userInfo';
class Dashboard extends Component {
    render () {
        return (
            <div className="yyn-dashboard">
                <UserInfo />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
