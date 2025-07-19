import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Alice Kim" age={25} bio="Adventure seeker and city lover." />
      <UserProfile name="Brian Otieno" age={30} bio="Urban photographer and foodie." />
      <Footer />
    </div>
  );
}

export default App;
