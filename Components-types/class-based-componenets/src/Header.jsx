import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "sami",
            age: 20
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>Lorem, ipsum.</p>
            </div>
        )
    }
}
