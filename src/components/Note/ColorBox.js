import React, { Component } from "react";

export default class ColorBox extends Component {
    clickHandler(color){
        // console.log(event)
        this.props.onColor(color)
    }
    render() {
        let { color } = this.props.color
        // console.log(color)
        return (
            <span className="color-box" style={{ backgroundColor: this.props.color }} onClick={this.clickHandler.bind(this,this.props.color)} ></span>

        )
    }
}