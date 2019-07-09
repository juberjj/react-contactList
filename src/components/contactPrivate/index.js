import React from "react";
import "./contactPrivate.css";
import "../../fontawesome";

export default ({ user }) => {
  return (
    <div className="row">
      <div className="col-12">
        <ul className="specs">
          <li>
            <span>Login</span>
            <dl>
              <dt>UUID</dt>
              <dd>{user.login.uuid}</dd>
              <dt>Username</dt>
              <dd>{user.login.username}</dd>
              <dt>Password</dt>
              <dd>{user.login.password}</dd>
            </dl>
          </li>
          <li>
            <span>Coordinates</span>
            <dl>
              <dt>Longitude</dt>
              <dd>{user.location.coordinates.longitude}</dd>
              <dt>Latitude</dt>
              <dd>{user.location.coordinates.latitude}</dd>
            </dl>
          </li>
          <li>
            <span>Timezone</span>
            <dl>
              <dt>Offset</dt>
              <dd>{user.location.timezone.offset}</dd>
              <dt>Description</dt>
              <dd>{user.location.timezone.description}</dd>
            </dl>
          </li>
          <li>
            <span>Registered</span>
            <dl>
              <dt>Date</dt>
              <dd>{user.registered.date}</dd>
              <dt>Age</dt>
              <dd>{user.registered.age}</dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  );
};