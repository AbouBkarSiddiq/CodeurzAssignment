import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ContactForm from './components/Form/ContactForm';
import Footer from './components/Footer/Footer';
import WorkProcess from './components/WorkProcess/WorkProcess';
import Work from './components/Work';
import Navbar from './components/Header/Header';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <AboutUs />
      <Work />
      <WorkProcess />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}

export default App;
