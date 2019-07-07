import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-warning">
          <div className="col-md-12">
            <h4>
              <span>Filter </span>
              <input type="text" placeholder="Name Search" />
              <span> Gender: </span>
              <select id="gender">
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