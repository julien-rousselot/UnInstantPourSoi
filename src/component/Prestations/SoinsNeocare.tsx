import './SoinsNeocare.scss';
import hanche from '../../assets/images/hanche.jpg';
import visageMassage from '../../assets/images/visageMassage.jpg';
import dosMassage from '../../assets/images/dosMassage.png';
import jambeMassage from '../../assets/images/jambeMassage.png';

import courbe from '../../assets/images/courbes.svg';


function SoinsNeocare () {

    return(
        <>
            <header>
                <section className='header-accueil'>
                    <img className='background-header' src={hanche} alt="sable" />
                    <div className='text-header-style'>
                        <h2>Les prestations</h2>
                        <p>Neocare</p>
                    </div>
                    <img className='ligne-prestations' src={courbe}/>

                </section>
            </header>
            <main>
                <section>
                    <img className='first-pic soins-picture' src={visageMassage} alt="visage Massage" />
                    <div className='text-soin-visage'><h4>Soin visage sur mesure </h4>
                    <p>Les soins du visage destinés de l'enfant, à l'adolescent et à l'adulte prennent soin de votre peau tout en douceur et avec respect.
                    Après un diagnostic sur vos ressentis, votre routine beauté et ce dont votre peau a réellement besoin, les cosmétiques seront choisis.
                    Découvrez les textures, granuleuses, crémeuse et onctueuse, les senteurs florales, gourmandes et fruitées, les sensations et stimulantes.
                    Une ambiance, calme et tamisée, bercée d'une musique apaisante, vous invite à vous relaxer, apprécier ce moment.
                    Reprenez un soin du visage complet, alliant efficacité et détente, ou n'hésitez pas à retrouver l'éclat, douceur et hydratation.
                    Les durées de soins sont de 30 minutes, 45 minutes, 1h et 1h30 sont proposées.
                    </p></div>
                </section>
                <section className='container-img-text left'>
                <img  src={dosMassage} alt="dos Massage" />

                    <div className='text-massage'><h4>Massage sur mesure </h4>
                    <p>Massages de l'enfant à l'adulte, permettant d'apaiser l'esprit, le corps et soulager les tensions.
                    Les soins sur mesure sont élaborés ensemble afin de considérer vos attentes pour y répondre au mieux.
                    Découvrez des techniques relaxantes, tonifiantes, détoxifiantes, en fonction de votre instant bien-être, selon vous choisissiez votre pression légère ou profonde.
                    Evadez-vous le temps d'un instant, 30 minutes, 45 minutes, 1h ou 1h30 et profitez de chaque instant que vous invertirez à l'installer.
                    Pour les futures mamans, découvrez le massage précieux des moments émoi.
                    Les mains relâchent et enveloppent, pour soulager les tensions et relancer la circulation entre la mère et son bébé.</p></div>
                </section>
                <section className='container-img-text right'>
                    <img src={jambeMassage} alt="jambe Massage" />
                    <div className='text-massage'><h4>Drainage lymphatique </h4>
                    <p>Le drainage lymphatique est un massage doux, léger, apaisant et drainant permettant d'améliorer la circulation veineuse.
                    Il permet également de réduire la sensation de jambes lourdes.
                    Ce soin apporte bien-être et légèreté.</p></div>
                </section>
                
            </main>
       </>
        )
}

export default SoinsNeocare;
