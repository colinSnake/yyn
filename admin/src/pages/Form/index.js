import React, { Component } from 'react'
import { connect } from 'react-redux'

class Form extends Component {
    render() {
        return (
            <div>
                表单
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
