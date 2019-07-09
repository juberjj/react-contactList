import React, { Fragment } from "react";
import api from "../dataStore/stubAPI"; // NEW
import ContactPublic from "../components/contactPublic/";
import ContactPrivate from "../components/contactPrivate/";
import { withRouter, Route, Link } from "react-router-dom";

const ContactPage = props => {
  const { id } = props.match.params;
  const contact = api.find(id);
  return (
    <Fragment>
    {contact ? (
      <Fragment>
        <ContactPublic user={contact} /> 
         {!props.history.location.pathname.endsWith("/private") && (
          <Link className="btn btn-primary active" to={`/contacts/${id}/private`}>See Private Data</Link>
        )}
        <Route path={`/contacts/:id/private`} 
            render={ (props) => <ContactPrivate {...props} user={contact} /> } />

      </Fragment>
    ) : (
      <p>Waiting for contact details</p>
    )}
  </Fragment>
  );
};

export default withRouter(ContactPage);