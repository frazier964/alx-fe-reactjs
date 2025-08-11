import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '10px', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
      <p style={{ fontSize: '18px' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
        "useContext", "UserContext"
      </p>
      <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;

