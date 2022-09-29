import React from "react";
import Download from './components/Download';
import Feature from './components/Feature';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />
      <Feature />
      <Testimonials />
      <Pricing />
      <Download />
      <Contact />
    </>
  );
}

export default App;
