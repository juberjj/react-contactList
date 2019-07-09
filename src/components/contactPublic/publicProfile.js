import React, { Fragment } from "react";
import { capitalize } from "../../util";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ user }) => {
  const address = capitalize(
    `${user.location.street}, ${user.location.city}, ${user.location.state}`
  );
  const dob = user.dob.date.split("-");
  const birthdate = `${dob[2].substr(0, 2)}/${dob[1]}/${dob[0]}  `;
  return (
    <Fragment>
      <h4>
        <FontAwesomeIcon icon={["fas", "home"]} />
        <span> {address}</span>
      </h4>
      <h4>
        <FontAwesomeIcon icon={["fas", "phone"]} />
        <span> {user.phone}</span>
      </h4>
      <h4>
        <FontAwesomeIcon icon={["fas", "envelope"]} />
        <span> {user.email}</span>
      </h4>
      <h4>
        <FontAwesomeIcon icon={["fas", "birthday-cake"]} />
        <span> {birthdate}</span>
      </h4>
    </Fragment>
  );
};