import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Accueil from '../Accueil/Accueil';
import Prestations from '../Prestations/Prestations';
import Contact from '../Contact/Contact';
import Tarifs from '../Tarifs/Tarifs';
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
          <Route path="/" element={<Accueil />}>
            
          </Route>
          <Route path="/Tarifs" element={<Tarifs />}>
            
          </Route>
          <Route path="/Contact" element={<Contact />}>
            
          </Route>
          <Route path="/Apropos" element={<Apropos />}>
            
          </Route>
          <Route path="/Prestations" element={<Prestations />}>
            
          </Route>
        </Routes>
        
        <Footer />
      </div>
  )
}

export default App;
