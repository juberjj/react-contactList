import React, { Component } from "react";
import Contact from "../contact/";
import './contactList.css';

export default class ContactList extends Component {
  render() {
    const contactCards = this.props.contacts.map(c => (
      <Contact key={c.phone} contact={c} />
    ));
    return (
      <div className="container-fluid contacts bg-info">
        <div className="row">{contactCards}</div>
      </div>
    );
  }
}