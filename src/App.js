import React, { Component } from "react";
import Header from "./components/header/";
import ContactList from "./components/contactList/";
import FilterControls from "./components/filterControls/";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import request from "superagent";
import api from "./dataStore/stubAPI"
import _ from 'lodash'

class App extends Component {
  state = { search: "", gender: "all" };
componentDidMount() {
  request.get("https://randomuser.me/api/?results=50").end((error, res) => {
  if (res) {
      let { results: contacts } = JSON.parse(res.text);
      api.initialize(contacts);
      this.setState({});
  } else {
      console.log(error);
  }
  });
}

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
  <div className="jumbotron">
      <Header noContacts={sortedContacts.length} />
      <FilterControls
          onUserInput={this.handleChange}
      />
      <ContactList contacts={sortedContacts}
      deleteHandler={this.deleteContact}  />
  </div>
  );
}
}
export default App;