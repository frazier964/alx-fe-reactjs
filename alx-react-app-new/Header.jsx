import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: 'navy',
    color: 'white',
    textAlign: 'center',
    padding: '30px 0',
    fontFamily: 'Arial, sans-serif',
    borderBottom: '5px solid #00ccff',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '2.5rem',
    letterSpacing: '1px',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>My Favorite Cities</h1>
    </header>
  );
}

export default Header;
