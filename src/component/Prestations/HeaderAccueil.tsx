import courbe from '../../assets/images/courbes.svg';

interface HeaderAccueilProps {
    imageSrc: string;
    title: string;
    subtitle: string;
    altTexte: string;
}

const HeaderAccueil = ({ imageSrc, title, subtitle, altTexte }: HeaderAccueilProps) => {
    return (
        <section className='header-accueil'>
            <img className='background-header' src={imageSrc} alt={altTexte} />
            <div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <img className='ligne-prestations' src={courbe} />
        </section>
    );
};

export default HeaderAccueil;
