import './Contact.scss';
import contactPicture from '../../assets/images/contactPicture.png'; 
import HeaderAccueil from '../Prestations/HeaderAccueil';
import Phone from '../../assets/images/phone.png';
import Calendar from '../../assets/images/calendar.png';
import Localisattion from '../../assets/images/localisation.png';

function Contact () {
    const apiKey = 'AIzaSyDfIlLrjqE2mQ5a3Q2jkoD1EwcfAo2ImLA';

    return(
        <>
            <header>
                <HeaderAccueil imageSrc={contactPicture} title="Contact" subtitle="" altTexte='contact'/>
            </header>
            <main>
                <section className='contact'>
                    <div className='container'>
                        <div className='divContact'>
                            <div className="divContactPadding interligne">
                                <img className='image-contact' src={Phone} alt="" />
                                <p>L'institut vous accueille sur rendez-vous au <span className="font-bold">09 51 91 19 20</span>.</p>
                                <p>N’hésitez pas à contacter ce numéro pour tous renseignements et ou prises de rendez-vous.</p>
                            </div>

                            <div className="divContactPadding">
                                <img className='image-contact' src={Calendar} alt="" />
                                <p>L'institut vous accueille du<strong className='font-bold'> mardi au samedi :</strong></p>
                                <ul className=" interligne">
                                    <li><strong className='font-bold'>Lundi :</strong> Fermé</li>
                                    <li><strong className='font-bold'>Mardi :</strong> 9h - 18h30</li>
                                    <li><strong className='font-bold'>Mercredi :</strong> 9h - 12h</li>
                                    <li><strong className='font-bold'>Jeudi :</strong> 9h - 18h30</li>
                                    <li><strong className='font-bold'>Vendredi :</strong> 9h - 18h30</li>
                                    <li><strong className='font-bold'>Samedi :</strong> 9h - 12h</li>
                                </ul>
                                <p className="italique-centrer">*<span className="italique-texte">en fonction de la haute saison, la plage horaire peut être élargie.</span></p>
                            </div>

                            <div className="divContactPadding interligne">
                                <img className='image-contact' src={Localisattion} alt="" />
                                <p><strong className='font-bold'>2 F rue de la corderie 17350 Port d'Envaux</strong></p>
                                <p>(en face de la pizzeria des halles et de la place de la mairie)</p>
                                <p>Possibilité de stationner gratuitement au parking St Alexis.</p>
                            </div>
                        </div>
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
