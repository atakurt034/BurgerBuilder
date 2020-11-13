import React, { Component } from 'react'
import * as actionTypes from "../../../store/actions"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

class Logout extends Component {

    componentDidMount = () => {
        this.props.onLogout();
    }

    render() {
        return (
            <Redirect to="/" />
        )
    }
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actionTypes.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);
