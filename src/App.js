import './App.css';
import React from 'react';
import Landing from './component/layout/landing/landing';
import Navbar from './component/layout/nav/navbar';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  React.useEffect(() => {
    AOS.init({duration : 1200 , once: true});
    AOS.refreshHard()
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Landing  />
    </div>
  );
}

export default App;
