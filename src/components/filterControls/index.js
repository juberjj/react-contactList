import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
    handleChange = (e, type, value) => {
        e.preventDefault();
        this.props.onUserInput(type, value);
    };
    handleTextChange = e => {
        this.handleChange(e, "name", e.target.value);
    };
    handleGenderChange = e => {
        this.handleChange(e, "gender", e.target.value);
    };
    render() {
        return (
        <div className="container-fluid">
            <div className="row bg-warning">
            <div className="col-md-12">
                <h4>
                <span>Filter </span>
                <input
                    type="text"
                    placeholder="Name Search"
                    onChange={this.handleTextChange}
                />
                <span> Gender: </span>
                <select
                    id="gender"
                    onChange={this.handleGenderChange}
                >
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                </h4>
            </div>
            </div>
        </div>
        );
    }

}