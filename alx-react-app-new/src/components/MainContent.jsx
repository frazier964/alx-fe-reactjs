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
      "I love to visit New York, Paris, and Tokyo."
      </p>
    </main>
  );
}

export default MainContent;
