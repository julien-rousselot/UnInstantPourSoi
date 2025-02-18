import './Contact.scss';
// Achanger pour l'exterieur du salon
import facade from '../../assets/images/facade.jpg'; 
import courbe from '../../assets/images/courbes.svg';
import { useEffect, useState } from 'react';


function Contact () {
    const apiKey = 'AIzaSyDfIlLrjqE2mQ5a3Q2jkoD1EwcfAo2ImLA';

    const [isVisible, setIsVisible] = useState(window.innerWidth > 768); // 768px est un exemple, modifie selon tes besoins

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth > 820);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <>
            <header>
                
            {isVisible ? (
                <section className='header-accueil contact-header'>
                    <img className='facade-header' src={facade} alt="sable" />
                    <h2>Contact</h2>
                    <img className='ligne-header-laptop' src={courbe}/>   
                </section>
            ) : (
                <img className='facade-header' src={facade} alt="sable" />
            )}
            </header>
            <main>
                <section className='contact'>
                    <div>
                        <h3>Horaires</h3>
                        <br />
                        <div >
                            <p className='contact-ouverture'>Lundi: Fermé</p>
                            <p className='contact-ouverture'>Mercredi et Samedi <br /> 9h - 12h</p>
                            <p className='contact-ouverture'>Mardi, Jeudi et Vendredi <br /> 9h - 12h <br /> 14h30 - 18h30</p>
                        </div><br /><br />
                        <div>
                            <p className='contact-disponibilite'>Les horaires peuvent varier en fonction de la haute et de la basse saison. </p>
                            <p className='contact-disponibilite'>La possibilité de vous recevoir entre 12h et 14h30 sur demande.</p>
                        </div><br /><br />
                        <p className='contact-italique'>Adresse : 2 rue Corderie, 17350 Port d'Envaux </p>
                        <p className='contact-italique'>Numéro : 09.51.91.19.20</p>
            
                        <div style={{ width: "94vw"}}>
                            <iframe title="Google Map" width="100%"
                                height="450"
                                loading="lazy"
                                allowFullScreen
                                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJaxwouaIeAUgRBIhtv27de4o&key=${apiKey}`}
                            ></iframe>
                        </div>
                    </div>
                </section>
            </main>
       </>
        )
}

export default Contact;
