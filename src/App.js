import React, { Component } from "react";
import Header from "./components/header/";
import ContactList from "./components/contactList/";
import FilterControls from "./components/filterControls/";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import request from "superagent";
import api from "./dataStore/stubAPI"

class App extends Component {
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

render(){
 
  let contacts = api.getAll();
        return (
        <div className="jumbotron">
            <Header noContacts={contacts.length} />
            <FilterControls />
            <ContactList contacts={contacts} />
        </div>
        );
    }
}

export default App;