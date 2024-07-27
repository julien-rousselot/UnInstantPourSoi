import './Message.scss';
// import Slider from "react-slick";
import fleche from '/src/assets/images/fleche.svg';
import profilComment  from '../../Data/profilComment';
import 'react-alice-carousel/lib/alice-carousel.css'
import { useState } from 'react';


function Message () {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProfile = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profilComment.length);
    };
  
    const prevProfile = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + profilComment.length) % profilComment.length);
    };

    return(
      <div className='clientRetour'>
        <h3>Vos retours</h3>
        <div className="retour">
            
            <img id="commentRight" src={fleche} onClick={prevProfile} />
            <div className="commentaire">
              <div className='commentary'><p>{profilComment[currentIndex].description}</p></div>
              <div className='name'><span id="name">{profilComment[currentIndex].firstName}</span></div>
            </div>
            <img id="commentLeft" src={fleche} onClick={nextProfile} />

        </div>  
      </div>
    )
}

export default Message;