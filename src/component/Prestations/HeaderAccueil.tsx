import courbe from '../../assets/images/courbes.svg';

interface HeaderAccueilProps {
    imageSrc: string;
    title: string;
    subtitle: string;
    altTexte: string;
}

const HeaderAccueil = ({ imageSrc, title, subtitle, altTexte }: HeaderAccueilProps) => {
    return (
        <section className='header-accueil' aria-labelledby={subtitle}>
            <img className='background-header' src={imageSrc} alt={altTexte} />
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <img className='ligne-prestations' src={courbe} alt='ligne design'/>
        </section>
    );
};

export default HeaderAccueil;
