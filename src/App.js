import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import Login from './page/login';
import Routes from './routes';

import './App.css';

function App(){
  const [user, setUser] = useState(null);

    if(user === null){
      return (
        <Login />
      );
    }

    return (
      <BrowserRouter>
          <Header />

          <Routes />
          
          <Footer />
      </BrowserRouter>
  );
}

export default App;


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
