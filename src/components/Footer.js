import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="card-footer fixed-bottom" style={{background: "#102c34", color: 'white'}}>
                &copy; All Rights are Resurved {new Date().getFullYear()-1} - {new Date().getFullYear()}  
            </div>
        )
    }
}
