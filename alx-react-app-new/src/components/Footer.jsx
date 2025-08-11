import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '15px',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    marginTop: '30px',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 My Favorite Cities. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
