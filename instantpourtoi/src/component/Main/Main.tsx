import './Main.scss';
import imageHeader from '../../assets/images/grandeimageheader.webp';
import photoMain from '../../assets/images/maintemporaire.jpg';
import Fleche from '../../assets/images/gauche.png';

function Main () {
    return(
        <main>
    <section>
        <img className="imageHeader" src={imageHeader} alt="" />
        <div className="description">
            <img className="mainPhoto" src={photoMain} alt="" />
            <h2>Accordez-vous un instant de détente</h2>
            <p>Découvrez un univers reposant, calme, élégant et épuré. Un espace de bien être pour vous inviter au lâcher-prise. Diverses prestations esthétique vous sont proposées, tel que des soins du visage et des massages sur mesure en accord avec vos envies et vos désirs, un soin innovant avec la technologie Neocare pour diminuer les signes de l'âge et la cellulite, des épilations, la beauté des ongles, le rehaussement de cils pour sublimer votre regard, les maquillages notamment le maquillage mariée ect.</p>
        </div>
        <div className="retour">
            <h3>Vos retours</h3>
            <div className="commentaire">
                {/* <!-- ici ce devra etre dynamique pour que la version mobile contienne 1 element mais laptop en contienne 3 --> */}
                <div>Accueil et prestations au top, un vrai moment de détente.
                    Merci Elisa !
                    <br/>
                   <br/>
                   <span id="name">Amélie</span> 
                </div>
                <div>
                    Institut agréable, Elisa est très douce et très professionnelle.
                    Prestations au top. J'Y retournerai avec plaisir ! Je conseille vivement. 
                    <br/>
                   <br/> Karine
                </div>
                <div>Salon magnifique, accueillant et chaleureux. Elisa est une professionnelle attentionnée, délicate et très à l'écoute. Je recommande vivement. <br/>
                   <br/> Florence
                </div>
            </div>
            <img id="commentGauche" src={Fleche} />
            <img id="commentRight" src={Fleche} />
        </div>
            <h3>Contact</h3>
    </section>
    </main>
        )
}

export default Main;

// const burger = document.querySelector('.menu-icon');

// burger.addEventListener("click", () => {
//     const nav = document.querySelector(".navList");
//     burger.classList.toggle('is-opened');
//     nav.classList.toggle("active");
//     document.querySelector('main').classList.toggle('transparency');
//     document.querySelector('footer').classList.toggle('transparency');

// });
