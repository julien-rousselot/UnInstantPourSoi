import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Accueil from '../Accueil/Accueil';
import PrestationsCil from '../Prestations/PrestationsCil';
import Contact from '../Contact/Contact';
import Apropos from '../APropos/Apropos';


import './App.scss';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
      <div>
        <Header isVisible={isVisible} toggleVisibility={toggleVisibility} />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/PrestationsCil" element={<PrestationsCil />} />
          {/* <Route path="/PrestationsMaquillage" element={<Prestations />} />
          <Route path="/PrestationsSoin" element={<Prestations />} /> */}

        </Routes>
        <Footer />
      </div>
  )
}

export default App;
