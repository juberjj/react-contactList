import React, { Component } from "react";
import Header from "./components/header/";
import ContactList from "./components/contactList/";
import FilterControls from "./components/filterControls/";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    const sample = {
      name: { first: "Joe", last: "Bloggs" },
      email: "j.bloggs@example.com",
      phone: "012-3456789",
      picture: { thumbnail: "./profile.png" }
    };

    const contacts = [sample, sample, sample, sample, sample];

    return (
      <div className="jumbotron">
        <Header noContacts={10} />
        <FilterControls />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;