import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import UserContext from './components/UserContext';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <div>
      <Header/>
      <MainContent />
      <UserProfile name="Jane Doe" age="29" bio="Traveler, foodie, and photographer." />
      <UserProfile name="John Smith" age="34" bio="City explorer and architecture lover." />
      <Footer/>
      <UserContext/>
    </div>
  );
}

export default App;
