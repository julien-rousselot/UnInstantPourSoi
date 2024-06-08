import { useState } from 'react';
import './Message.scss';
import flecheGauche from '../../assets/images/gauche.png';
import profilComment from '../../Data/profilComment';
// import React from 'react'
// import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


function Message () {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProfile = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profilComment.length);
    };
  
    const prevProfile = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + profilComment.length) % profilComment.length);
    };

    return(
        <div className="retour">
               <h3>Vos retours</h3>
            <div className="commentaire">
                <section>
                    <div className='commentary'><p>{profilComment[currentIndex].description}</p></div>
                    <div className='name'><span id="name">{profilComment[currentIndex].firstName}</span> </div>
                    <img id="commentGauche" src={flecheGauche} onClick={prevProfile} />
                    <img id="commentRight" src={flecheGauche} onClick={nextProfile} />
                </section>
            </div>
        </div>  
    )
}

export default Message;