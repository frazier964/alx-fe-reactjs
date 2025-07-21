import React from 'react';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';


function App() {
  return (
    <div>
      <Header/>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <MainContent/>
      <Footer/>

    </div>
  );
}

export default App;


