import React, { Fragment } from "react";
import { capitalize } from "../../util";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contactPublic.css";
import { Link } from "react-router-dom";
import PublicProfile from "../contactPublic/publicProfile"

export default ({ user }) => {
  const name = capitalize(`${user.name.first} ${user.name.last}`);
  return (
    <Fragment>
      <div className="row">
      <div className="col-2">
        <Link to="/">
          <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="3x" />
          <span>Back</span>
        </Link>
        </div>
        <div className="col-3 offset-2">
          <h2>{name}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img src={user.picture.large} className="contact" alt={name} />
        </div>
        <div className="col-4">
          <PublicProfile user={user} />
        </div>
        <div className="col-5 bg-secondary text-light">
           <span>Map placeholder</span>
        </div>
      </div>
    </Fragment>
  );
};