import React, { Component } from "react";
import "./contact.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="card">
          <img
            className="card-img-tag center "
            alt={this.props.contact.name}
            src={this.props.contact.picture.thumbnail}
          />
          <div className="card-body">
            <h5 className="card-title ">
              {`${this.props.contact.name.first} ${
                this.props.contact.name.last
              }`}
            </h5>
            <p key="email">
              <FontAwesomeIcon icon={["fas", "envelope"]} />
              <span> {this.props.contact.email}</span>
            </p>
            <p key="phone">
              <FontAwesomeIcon icon={["fas", "phone"]} />
              <span> {this.props.contact.phone} </span>
            </p>
          </div>
          <div className="card-footer">
            <div
              className="btn-group d-flex btn-group-justified"
              role="group"
              aria-label="..."
            >
              <button type="button" className={"btn btn-default w-100"}>
                {" Edit "}
              </button>
              <button type="button" className={"btn btn-danger w-100"}>
                {"Delete"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;