import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Accueil from '../Accueil/Accueil';
import SoinsNeocare from '../Prestations/SoinsNeocare';
import Contact from '../Contact/Contact';
// import Apropos from '../APropos/Apropos';


import './App.scss';
import SoinsSurMesure from '../Prestations/SoinsSurMesure';
import PrestationsBeaute from '../Prestations/PrestationsBeaute';
import CarteCadeau from '../CarteCadeau/CarteCadeau';
import CarteCadeauSucces from '../CarteCadeau/CarteCadeauSucces';
import CarteCadeauAnnule from '../CarteCadeau/CarteCadeauAnnule';
import AdminCartesCadeaux from '../Admin/AdminCartesCadeaux';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
      <div className="app-shell">
        <Header isVisible={isVisible} toggleVisibility={toggleVisibility} />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/Apropos" element={<Apropos />} /> */}
          <Route path="/SoinsNeocare" element={<SoinsNeocare />} />
          <Route path="/SoinsSurMesure" element={<SoinsSurMesure />} />
          <Route path="/PrestationsBeaute" element={<PrestationsBeaute />} />
          <Route path="/CarteCadeau" element={<CarteCadeau />} />
          <Route path="/CarteCadeau/Succes" element={<CarteCadeauSucces />} />
          <Route path="/CarteCadeau/Annule" element={<CarteCadeauAnnule />} />
          <Route path="/Admin/CartesCadeaux" element={<AdminCartesCadeaux />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App;
