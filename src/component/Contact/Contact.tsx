import './Contact.scss';
// Achanger pour l'exterieur du salon
import hanche from '../../assets/images/hanche.jpg'; 
import courbe from '../../assets/images/courbes.svg';


function Contact () {

    return(
        <>
            <header>
                <section className='header-accueil'>
                    <img className='background-header background-header-contact' src={hanche} alt="sable" />
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
                        <p className='contact-italique'>Adresse: 21 rue de la tranquilitude, 34056 Babouche </p>
                        <p className='contact-italique'>Numéro: 0854254712</p>

                    </div>
                </section>
            </main>
       </>
        )
}

export default Contact;
