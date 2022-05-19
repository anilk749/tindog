import React from "react";
import Feature from "./Feature";
import Contact from "./Contact";
import Header from "./Header";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Download from "./Download";

function App() {
  return (
    <div>
      <Header />
      <Feature />
      <Testimonials />
      <Pricing />
      <Download />
      <Contact />
    </div>
  );
}

export default App;
