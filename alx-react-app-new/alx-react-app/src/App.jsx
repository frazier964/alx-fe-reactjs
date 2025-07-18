import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Brian" age="30" bio="Coffee enthusiast and tech blogger" />
      <Footer />
    </div>
  );
}

export default App;

