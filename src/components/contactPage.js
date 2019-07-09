import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import api from "../dataStore/stubAPI"; // NEW
import ContactPublic from "../components/contactPublic/";
import ContactPrivate from "../components/contactPrivate/";

const ContactPage = props => {
  const { id } = props.match.params;
  const contact = api.find(id);
  return (
    <Fragment>
      {contact ? (
        <Fragment>
          <ContactPublic user={contact} />           
          <ContactPrivate user={contact} />
        </Fragment>
      ) : (
        <p>Waiting for contact details</p>
      )}
    </Fragment>
  );
};

export default withRouter(ContactPage);