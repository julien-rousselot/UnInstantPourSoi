import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.scss';


function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
      <div>
        <Header isVisible={isVisible} toggleVisibility={toggleVisibility} />
        <Main />
        <Footer />
      </div>
  )
}

export default App;
