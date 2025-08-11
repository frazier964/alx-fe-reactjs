import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#333',
    padding: '1rem 0'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  };

  const menuStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const itemStyle = {
    marginLeft: '2rem'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  };

  const linkHoverStyle = {
    backgroundColor: '#555'
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          My Company
        </Link>
        <ul style={menuStyle}>
          <li style={itemStyle}>
            <Link 
              to="/" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Home
            </Link>
          </li>
          <li style={itemStyle}>
            <Link 
              to="/about" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              About
            </Link>
          </li>
          <li style={itemStyle}>
            <Link 
              to="/services" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Services
            </Link>
          </li>
          <li style={itemStyle}>
            <Link 
              to="/contact" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;