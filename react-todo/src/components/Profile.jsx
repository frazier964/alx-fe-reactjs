import React from "react";
import "./Profile.css";

function Profile({ name }) {
  return (
    <div className="profile">
      <h2>Profile</h2>
      <p>{name}</p>
    </div>
  );
}

export default Profile;
