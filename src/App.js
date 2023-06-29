import React from 'react';
import './App.css';

import Navbar from './components/nav/Navbar';
import Header from './components/header/Header';
import AboutUs from './components/about/AboutUs';
import SpecialMenu from './components/menu/SpecialMenu';
import Chef from './components/chef/Chef';
import Intro from './components/intro/Intro';
import Laurels from './components/laurels/Laurels';
import Gallery from './components/gallery/Gallery';
import FindUs from './components/FindUs';
import Footer from './components/footer/Footer';



const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
