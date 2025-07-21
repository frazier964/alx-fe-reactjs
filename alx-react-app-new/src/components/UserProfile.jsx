import React from 'react';

function UserProfile(props) {
  const containerStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '15px auto',
    borderRadius: '10px',
    width: '80%',
    backgroundColor: '#0000FF',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const nameStyle = {
    color: '#007acc',
    fontSize: '24px',
    marginBottom: '10px',
  };

  const ageStyle = {
    fontWeight: 'bold',
    color: '#333',
  };

  const bioStyle = {
    fontStyle: 'italic',
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <h2 style={nameStyle}>{props.name}</h2>
      <p>Age: <span style={ageStyle}>{props.age}</span></p>
      <p style={bioStyle}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
