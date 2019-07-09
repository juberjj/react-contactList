import React, { Component, Fragment } from "react";
import "./contact.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonsConfig";
import api from '../../dataStore/stubAPI'
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    status: "",
    email: this.props.contact.email,
    phone: this.props.contact.phone,
    previousDetails: {
      email: this.props.contact.email,
      phone: this.props.contact.phone
    }
  };
  handleEdit = () => this.setState({ status: "edit" });
  handleCancel = () => {
    let { email, phone } = this.state.previousDetails;
    this.setState({ status: "", email, phone });
  };
  handleEmailChange = e => this.setState({ email: e.target.value });
  handlePhoneChange = e => this.setState({ phone: e.target.value });
  
  handleSave = e => {
    e.preventDefault();
    let updatedEmail = this.state.email.trim();
    let updatedPhone = this.state.phone.trim();
    if (!updatedEmail || !updatedPhone) {
    return;
    }
    let { email, phone } = this.state;
    this.setState({ status: "", previousDetails: { email, phone } });
    api.update(this.state.previousDetails.phone, updatedEmail, updatedPhone);
};   

  handleDelete = () =>  this.setState({ status : 'del'} );
  handleConfirm = (e) => {
  e.preventDefault();
  this.props.deleteHandler(this.state.phone);
  };

  render() {
    let activeButtons = buttons.normal;
    let leftButtonHandler = this.handleEdit;
    let rightButtonHandler = this.handleDelete;
    let cardColor = "bg-white";
    if (this.state.status === "edit") {
      cardColor = "bg-primary";
      activeButtons = buttons.edit;
      leftButtonHandler = this.handleSave;
      rightButtonHandler = this.handleCancel;
    }else if(this.state.status === 'del'){

      activeButtons = buttons.delete;
      leftButtonHandler = this.handleCancel;
      rightButtonHandler = this.handleConfirm;

    }
    return (
      <div className="col-sm-3">
        <div className={`card  ${cardColor}`}>
        <Link
          to={`/contacts/${this.props.contact.phone}${this.props.contact.cell}`}
          >
          <img
            className="card-img-tag center "
            alt={this.props.contact.name}
            src={this.props.contact.picture.thumbnail}
          />
          </Link>
          <div className="card-body">
            <h5 className="card-title ">
              {`${this.props.contact.name.first} ${
                this.props.contact.name.last
              }`}
            </h5>
            {this.state.status === "edit" ? (
              <Fragment>
                <p>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                  />
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <p>
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                  <span> {this.props.contact.email}</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={["fas", "phone"]} />
                  <span> {this.props.contact.phone} </span>
                </p>
              </Fragment>
            )}
          </div>
          <div className="card-footer">
            <div
              className="btn-group d-flex btn-group-justified"
              role="group"
              aria-label="..."
            >
              <button
                type="button"
                className={"btn w-100 " + activeButtons.leftButtonColor}
                onClick={leftButtonHandler}
              >
                {activeButtons.leftButtonVal}
              </button>
              <button
                type="button"
                className={"btn w-100 " + activeButtons.rightButtonColor}
                onClick={rightButtonHandler}
              >
                {activeButtons.rightButtonVal}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;