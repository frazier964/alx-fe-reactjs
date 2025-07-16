import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import WelcomeMessage from './components/WelcomeMessage'; 

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <WelcomeMessage /> 
      <Footer />
    </div>
  );
}

export default App;

