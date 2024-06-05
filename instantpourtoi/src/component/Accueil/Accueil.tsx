import './Accueil.scss';
import Message from '../Message/Message';
import imageHeader from '../../assets/images/Photo accueil.jpg';
import photoDos from '../../assets/images/Photo dos.jpg';

function Accueil () {

    return(
        <main>
            <div className='bigImageDiv'>
                <img className="imageHeader" src={imageHeader} alt="" />
            </div>
    <section className="description">
                <img className="dosPhoto" src={photoDos} alt="" />
                <div className='descriptionText'>
                    <h2>Accordez-vous un instant de détente</h2>
                    <p>Découvrez un univers reposant, calme, élégant et épuré. Un espace de bien être pour vous inviter au lâcher-prise. Diverses prestations esthétique vous sont proposées, tel que des soins du visage et des massages sur mesure en accord avec vos envies et vos désirs, un soin innovant avec la technologie Neocare pour diminuer les signes de l'âge et la cellulite, des épilations, la beauté des ongles, le rehaussement de cils pour sublimer votre regard, les maquillages notamment le maquillage mariée ect.</p>
                </div>
    </section>
     <Message />
    </main>
        )
}

export default Accueil;

