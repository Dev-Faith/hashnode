import React from 'react';
import { Body, Footer, Navbar, Story } from './components';

const App = () => {
  return (
      <div className="App">
          <Navbar />
          <Story />
          <Body />
          <Footer/>
      </div>
  )
}

export default App;