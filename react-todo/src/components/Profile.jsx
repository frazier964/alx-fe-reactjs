import React from "react";
import "./Profile.css";

function Profile({ name, description }) {
  return (
    <div className="profile-container">
      <h2 className="profile-name">{name}</h2>
      {description && <p className="profile-description">{description}</p>}
    </div>
  );
}

export default Profile;
