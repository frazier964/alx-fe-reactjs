import React from 'react';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import React from 'react';
import Counter from './components/Counter';
import UserContext from '../../alx-react-app-props/src/UserContext';
import ProfilePage from '../../alx-react-app-props/src/ProfilePage';

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
      <React/>
      <Counter/>
      <UserContext/>

    </div>
  );
}

export default App;


