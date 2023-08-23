import React from 'react';
import { Navbar } from './components/mainpage/Navbar.jsx';
import { Logo } from './components/mainpage/Logo.jsx';
import { Info } from './components/mainpage/Info.jsx';
import { Footer } from './components/mainpage/Footer.jsx';
import { Desc } from './components/mainpage/Desc.jsx';
import {Tariff} from './components/mainpage/tariff.jsx';
import {Buck} from './components/mainpage/Buck.jsx';

import './App.css';
import './components/styles/navbar.css';
import './components/styles/logo.css';
import './components/styles/info.css';
import './components/styles/footer.css';
import './components/styles/desc.css';
import './components/styles/tariff.css';
import './components/styles/buck.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <Info />
      <Desc />
      <Tariff/>
      <Buck/>
      <Footer />
    </div>
  );
}

export default App;
