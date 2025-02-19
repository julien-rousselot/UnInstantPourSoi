import './SoinsNeocare.scss';
import soinsNeocare from '../../assets/images/soinNeocareVisage.jpg';
import visage from '../../assets/images/visagePageNeocare.jpg';
import ventre from '../../assets/images/ventrePageNeocare.jpg';
import neocareMachine from '../../assets/images/Neocare.jpg';
import metre from '../../assets/images/couture.jpg';
import HeaderAccueil from './HeaderAccueil';


function SoinsNeocare () {

    return(
        <>
            <header>
                <HeaderAccueil imageSrc={soinsNeocare} title="Les prestations" subtitle="Neocare" altTexte="Neocare"/>
            </header>
            <main>
                <section>
                    
                    <div className='text-soin-visage'>
                        <h4>Decouvrez Neocare de Bloomea. </h4><img className='soins-picture' src={neocareMachine} alt="visage Massage" />
                        <p className='p-soinNeocare'>
                            Neocare est une technologie moderne permettant de travailler le visage et le corps. En effet, cet appareil révèle des soins révolutionnaires pour lutter contre le vieillissement cutané, les signes de fatigue, la cellulite et les graisses localisées. <br /><br />
                            C’est un soin chaleureux et agréable, Neocare produit une chaleur grâce à la stimulation cellulaire. <br /><br />
                            Des résultats peuvent être visibles dès la première séance, pour les maintenir durablement et se rapprocher de vos objectifs minceur ou anti-âge, il est recommandé d’effectuer une cure qui est disponible sur devis. <br /><br />
                            Avant tout début de cure, un bilan est réalisé afin de connaître vos besoins, les zones à travailler, votre alimentation, vos dépenses sportives et votre santé. Pour le corps, les prises de mesure sont effectuées afin d’établir une comparaison entre le début et la fin de votre cure.
                        </p>
                    </div>
                </section>
                <section className='face-neocare-position-left'>
                <img  src={visage} alt="dos Massage" />

                    <div className='text-massage'>
                        <p className='p-soinNeocare'>Neocare pour votre visage à la séance :<br /><br />
                            Petite zone du visage : 40 €<br />
                            Visage sans masque : 80 €<br />
                            Visage avec masque : 90 €<br /><br /><br />
                            <div className='p-italique'>Sur la photo, ma cliente a effectué une cure de 10 soins, réalisée une fois par semaine.</div><br /><br />
                            <div className='bold-devis'>Cure sur devis.</div>
                        </p>
                    </div>
                </section>

                <section className='face-neocare-position-right'>
                    <div className='text-massage'>
                        <p className='p-soinNeocare'>Neocare pour votre corps à la séance : <br /><br />
                            Petite zone du corps : 55 € <br />
                            Séance corps : 80 €<br /><br /><br />
                            <div className='p-italique'>Sur la photo, ma cliente a effectué une cure de 14 séances sur la partie abdominale et une perte centimétrique de 6 cm.<br /><br /></div>
                           <div className='bold-devis'>Cure sur devis.</div>
                        </p>
                        <div>

                            <img className='couture-metre' src={metre} alt="metre de couture" />
                        </div>
                    </div>
                    <img src={ventre} className='ventre-picture' alt="jambe Massage" />
                </section>
                
            </main>
       </>
        )
}

export default SoinsNeocare;
