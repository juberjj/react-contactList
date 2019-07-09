import Header from "./components/header/";
import ContactList from "./components/contactList/";
import FilterControls from "./components/filterControls/";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//import request from "superagent";
import api from "./dataStore/stubAPI"
import _ from 'lodash'
import React, { Component, Fragment } from "react";

class App extends Component {
  state = { search: "", gender: "all" };

handleChange = (type, value) => {
  type === "name"
  ? this.setState({ search: value })
  : this.setState({ gender: value });
};

deleteContact = (key) => {
  api.delete(key); 
  this.setState({});                          
};

render(){
 
  let contacts = api.getAll();
  let filteredContacts = contacts.filter(c => {
  const name = `${c.name.first} ${c.name.last}`;
  return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
  });
  filteredContacts =
  this.state.gender === "all"
      ? filteredContacts
      : filteredContacts.filter(c => c.gender === this.state.gender);
  let sortedContacts = _.sortBy(filteredContacts, c => c.name.last);

  return (
    <Fragment>
    <Header noContacts={sortedContacts.length} />
    <FilterControls onUserInput={this.handleChange} />
    <ContactList
      contacts={sortedContacts}
      deleteHandler={this.deleteContact}
    />
  </Fragment>
  );
}
}
export default App;