import { useState } from 'react';
import './Message.scss';
import flecheGauche from '../../assets/images/gauche.png';
import profilComment from '../../Data/profilComment';

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
                <div>
                    <p>{profilComment[currentIndex].description}</p>
                    <br/>
                    <br/>
                    <span id="name">{profilComment[currentIndex].firstName}</span> 
                    <img id="commentGauche" src={flecheGauche} onClick={prevProfile} />
                    <img id="commentRight" src={flecheGauche} onClick={nextProfile} />
                </div>
            </div>
        </div> 
    )
}

export default Message;