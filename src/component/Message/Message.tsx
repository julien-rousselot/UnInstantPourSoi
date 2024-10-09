import './Message.scss';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [commentsToShow, setCommentsToShow] = useState(1); // Par défaut, on montre 1 commentaire pour mobile

  const comments = [
    "Accueil et prestations au top, un vrai moment de détente. Merci Elisa !",
    "Institut agréable, Elisa est très douce et très professionnelle. Prestations au top. J'y retournerai avec plaisir ! Je conseille vivement.",
    "Salon magnifique, accueillant et chaleureux. Elisa est une professionnelle attentionnée, délicate et très à l'écoute. Je recommande vivement",
    "Great place and Elisa is so nice. I'll definitely come back. ",
  ];

  const names = [
    "Amélie",
    "Karine",
    "Florence",
    "Lulencito",
  ];

  // Gérer le changement d'écran pour afficher soit 1 commentaire (mobile), soit 3 (desktop)
  useEffect(() => {
    const updateCommentsToShow = () => {
      if (window.innerWidth > 940) {
        setCommentsToShow(3); // 3 commentaires pour desktop
      } else {
        setCommentsToShow(1); // 1 commentaire pour mobile
      }
    };

    updateCommentsToShow(); // Détecter la taille de l'écran lors du chargement

    window.addEventListener('resize', updateCommentsToShow); // Ajuster en fonction du redimensionnement

    return () => window.removeEventListener('resize', updateCommentsToShow); // Nettoyage du listener
  }, []);

  const handleNext = () => {
    // Faire avancer d'un seul commentaire à la fois
    setIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const handlePrev = () => {
    // Faire reculer d'un seul commentaire à la fois
    setIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn left-btn" onClick={handlePrev}>
        &#10094;
      </button>
      <div className="carousel">
        <div className="carousel-items">
          {comments
            .slice(index, index + commentsToShow) // Afficher les commentaires à partir de l'index
            .concat(comments.slice(0, Math.max(0, index + commentsToShow - comments.length))) // Gérer le retour au début
            .map((comment, idx) => (
              <div className="carousel-item" key={idx}>
                <p>{comment} <br /><br />{names[(index + idx) % names.length]}</p>
              </div>
            ))}
        </div>
      </div>
      <button className="carousel-btn right-btn" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
