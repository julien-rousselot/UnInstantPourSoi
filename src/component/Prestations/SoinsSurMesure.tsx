import './SoinsSurMesure.scss';
import hanche from '../../assets/images/hanche.jpg';
import visageMassage from '../../assets/images/visageMassage.jpg';
import dosMassage from '../../assets/images/dosMassage.png';
import jambeMassage from '../../assets/images/jambeMassage.png';
import cuisseMassage from '../../assets/images/cuisseMassage.png';
import epauleMassage from '../../assets/images/epauleMassage.png';
import carteCadeau from '../../assets/images/carteCadeau.png';
import courbe from '../../assets/images/courbes.svg';



function SoinsSurMesure () {

    return(
        <>
            <header>
                <section className='header-accueil'>
                    <img className='background-header' src={hanche} alt="sable" />
                    <div className='text-header-style'>
                        <h2>Les prestations</h2>
                        <p>Soins sur mesure</p>
                    </div>
                    <img className='ligne-prestations' src={courbe}/>

                </section>
            </header>
            <main>
                <section className='container-img-text right'>
                    <img className='first-pic soins-picture' src={visageMassage} alt="visage Massage" />
                    <div className='text-massage'><h4>Soin visage sur mesure </h4>
                    <p>Les soins du visage destinés de l'enfant, à l'adolescent et à l'adulte prennent soin de votre peau tout en douceur et avec respect. <br /> <br />
                    Après un diagnostic sur vos ressentis, votre routine beauté et ce dont votre peau a réellement besoin, les cosmétiques seront choisi. <br /> <br />
                    Découvrez les textures, granuleuses, crémeuse et onctueuse, les senteurs florales, gourmandes et fruitées, les sensations et stimulantes. <br /> <br />
                    Une ambiance, calme et tamisée, bercée d'une musique apaisante, vous invite à vous relaxer, apprécier cet instant pour vous. <br /> <br />
                    Recevez un soin du visage complet, alliant efficacité et détente, ou n'hésitez pas à retrouver l'éclat, douceur et hydratation.
                    Les durées de soins sont de 30 minutes, 45 minutes, 1h et 1h30 sont proposées.
                    </p></div>
                </section>
                <section className='container-img-text left'>
                    <img  src={dosMassage} alt="dos Massage" />
                    <div className='text-massage'><h4>Massage sur mesure </h4>
                    <p>Massages de l'enfant à l'adulte, permettant d'apaiser l'esprit, le corps et soulager les tensions. <br />
                    Les soins sur mesure sont élaborés ensemble afin de considérer vos attentes pour y répondre au mieux. <br />
                    Découvrez des techniques relaxantes, tonifiantes, détoxifiantes, en fonction de votre instant bien-être, selon vous choisissiez votre pression légère ou profonde. <br />
                    Evadez-vous le temps d'un instant, 30 minutes, 45 minutes, 1h ou 1h30 et profitez de chaque instant que vous invertirez à l'installer. <br /><br />
                    Pour les futures mamans, découvrez le massage précieux des moments émoi.
                    Les mains relâchent et enveloppent, pour soulager les tensions et relancer la circulation entre la mère et son bébé.</p></div>
                </section>
                <section className='container-img-text right'>
                    <img src={jambeMassage} alt="jambe Massage" />
                    <div className='text-massage'><h4>Drainage lymphatique </h4>
                    <p>Le drainage lymphatique est un massage doux, léger, apaisant et drainant permettant d'améliorer la circulation veineuse. <br />
                    Il permet également de réduire la sensation de jambes lourdes. <br />
                    Ce soin apporte bien-être et légèreté.</p></div>
                </section>
                <section className='container-img-text left'>
                <img src={cuisseMassage} alt="jambe Massage" />
                    <div className='text-massage'><h4>Massage amincissant manuel
                    </h4>
                    <p>Massage permettant de travailler les graisses localisées, dans le but de remodeler la silhouette, drainer pour stimuler la circulation sanguine et lymphatique, libérer les toxines et tonifier le corps grâce à des techniques de pétrissage, de palper rouler et de lissage.</p></div>
                </section>
                <section className='container-img-text right'>
                    <img src={epauleMassage} alt="epaule Massage" />
                    <div className='text-massage'><h4>Gommage corps
                    </h4>
                    <p>Découvrez une sélection de gommage avec différentes textures, parfums et grains fins, modéré ou fort. <br />
                    Une exfoliation globale permettant d'éliminer les cellules mortes, de stimuler la circulation sanguine et de lisser votre peau.
                    Votre épiderme sera totalement doux, soyeux et lisse.</p></div>
                </section>
                <section className='container-img-text left'>
                <img src={carteCadeau} alt="carte Cadeau" />
                    <div className='text-massage'><h4>Carte cadeau
                    </h4>
                    <p>Offrez un instant de bien-être et de détente à vos proches. <br />
                    Les cartes cadeau permettent d’offrir soit une somme de votre choix. <br /> une prestation de bien-être ou de beauté ou une durée pour prendre son rendez-vous. <br />
                    Pour une durée elle aura le choix de faire ce qu’elle désire, jusqu’au jour de sa venue.</p></div>
                   
                </section>
            </main>
       </>
        )
}

export default SoinsSurMesure;
