import './Contact.scss';
// Achanger pour l'exterieur du salon
import facade from '../../assets/images/facade.jpg'; 
import courbe from '../../assets/images/courbes.svg';


function Contact () {

    return(
        <>
            <header>
                <section className='header-accueil contact-header'>
                    <img className='facade-header' src={facade} alt="sable" />
                    <div className='text-header-style'>
                        <h2>Contact</h2>
                    </div>
                    <img className='ligne-prestations' src={courbe}/>

                </section>
            </header>
            <main>
                <section className='contact'>
                    <div>
                        <h3>Horaires</h3>
                        <br />
                        <div >
                            <p className='contact-ouverture'>Lundi: Fermé</p>
                            <p className='contact-ouverture'>Mercredi et Samedi: 9h - 12h</p>
                            <p className='contact-ouverture'>Mardi, Jeudi et Vendredi: 9h - 12h 14h30 - 18h30</p>
                        </div><br /><br />
                        <div>
                            <p className='contact-disponibilite'>Les horaires peuvent varier en fonction de la haute et de la basse saison. </p>
                            <p className='contact-disponibilite'>La possibilité de vous recevoir entre 12h et 14h30 sur demande.</p>
                        </div><br /><br />
                        <p className='contact-italique'>Adresse: 2 rue Corderie, 17350 Port d'Envaux </p>
                        <p className='contact-italique'>Numéro: 0854254712</p>
            
                        <div style={{ width: "100vw", height: "100%"}}>
      <iframe title="Google Map" width="100%"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJaxwouaIeAUgRBIhtv27de4o&key=AIzaSyDfIlLrjqE2mQ5a3Q2jkoD1EwcfAo2ImLA"
      ></iframe>
    </div>
{/* AIzaSyDfIlLrjqE2mQ5a3Q2jkoD1EwcfAo2ImLA */}
                    </div>
                </section>
            </main>
       </>
        )
}

export default Contact;
