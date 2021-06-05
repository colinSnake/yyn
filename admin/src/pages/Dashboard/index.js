import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render () {
        return (
            <div>
                控制台
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
