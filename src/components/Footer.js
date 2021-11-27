import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="App card-footer fixed-bottom" style={{background: "#102c34", color: 'white'}}>
                &copy; All Rights Are Reserved {new Date().getFullYear()-1} - {new Date().getFullYear()}  
            </div>
        )
    }
}
