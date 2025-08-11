import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: 'navy',
    color: 'white',
    textAlign: 'center',
    padding: '30px 0',
    fontFamily: 'Arial, sans-serif',
    borderBottom: '4px solid lightblue',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  };

  return (
    <header style={headerStyle}>
      <h1>My Favorite Cities</h1>
    </header>
  );
}

export default Header;
