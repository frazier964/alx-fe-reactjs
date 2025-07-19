import React from 'react';

function MainContent() {
  const mainStyle = {
    padding: '20px',
    backgroundColor: '#e6f7ff',
    fontFamily: 'Arial, sans-serif',
    minHeight: '150px',
    lineHeight: '1.6',
    textAlign: 'justify',
  };

  return (
    <main style={mainStyle}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Explore These Amazing Cities</h2>
      <p>
        From the bustling streets of Tokyo to the charming canals of Venice, cities around the world offer rich culture, amazing food, and unforgettable experiences. Discover what makes each one unique.
      </p>
    </main>
  );
}

export default MainContent;
