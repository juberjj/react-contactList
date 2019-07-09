import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import request from "superagent";
import api from "./dataStore/stubAPI"; // NEW
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import ContactPage from "./components/contactPage";

class Router extends Component {
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

  render() {
    return (
       <BrowserRouter>
        <div className="jumbotron">
          <div className="container-fluid ">
            <Switch>
              <Route path="/contacts/:id" component={ContactPage} />
              <Route exact path="/" component={App} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById("root"));