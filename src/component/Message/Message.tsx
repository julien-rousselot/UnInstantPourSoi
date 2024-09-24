// import './Message.scss';
// // import Slider from "react-slick";
// // import fleche from '/src/assets/images/fleche.svg';
// // import profilComment  from '../../Data/profilComment';
// // import 'react-alice-carousel/lib/alice-carousel.css'
// // import { useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// function Message () {


//     // const [currentIndex, setCurrentIndex] = useState(0);

//     // const nextProfile = () => {
//     //   setCurrentIndex((prevIndex) => (prevIndex + 1) % profilComment.length);
//     // };
  
//     // const prevProfile = () => {
//     //   setCurrentIndex((prevIndex) => (prevIndex - 1 + profilComment.length) % profilComment.length);
//     // };

//     // return(
//     //   <div className='clientRetour'>
//     //     <div className="retour">
            
//     //         <img id="commentRight" alt='fleche commentaire' src={fleche} onClick={prevProfile} />
//     //         <div className="commentaire">
//     //           <div className='commentary'><p>{profilComment[currentIndex].description}</p></div>
//     //           <div className='name'><span id="name">{profilComment[currentIndex].firstName}</span></div>
//     //         </div>
//     //         <img id="commentLeft" alt='fleche commentaire' src={fleche} onClick={nextProfile} />

//     //     </div>  
//     //   </div>
//     // )
// }

// // export default Message;
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css'; // Import des styles pour le carousel

// // Configuration de la réactivité du carousel
// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

// // Composant fonctionnel Carousel
// const SimpleCarousel = () => {
//   return (
//     <Carousel responsive={responsive}>
//       <div className='message-institut'>Item 1</div>
//       <div className='message-institut'>Item 2</div>
//       <div className='message-institut'>Item 3</div>
//       <div className='message-institut'>Item 4</div>
//       {/* Ajoutez plus d'éléments si nécessaire */}
//     </Carousel>
//   );
// };

// export default SimpleCarousel;

// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// // Configuration de la réactivité du carousel
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3 // optionnel, par défaut 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2 // optionnel, par défaut 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optionnel, par défaut 1.
//   }
// };

// // Composant fonctionnel Carousel
// const MyCarousel = (props) => {
//   const { deviceType } = props; // Utilisez la prop deviceType pour gérer les appareils

//   return (
//     <Carousel
//       swipeable={false}
//       draggable={false}
//       showDots={true}
//       responsive={responsive}
//       ssr={true} // signifie rendre le carousel côté serveur.
//       infinite={true}
//       autoPlay={deviceType !== "mobile"} // Active autoPlay sauf sur mobile
//       autoPlaySpeed={1000}
//       keyBoardControl={true}
//       customTransition="all .5"
//       transitionDuration={500}
//       containerClass="carousel-container"
//       removeArrowOnDeviceType={["tablet", "mobile"]}
//       deviceType={deviceType}
//       dotListClass="custom-dot-list-style"
//       itemClass="carousel-item-padding-40-px"
//     >
//       <div className='message-institut'>ItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem 1</div>
//       <div className='message-institut'>Item 2</div>
//       <div className='message-institut'>Item 3</div>
//       <div className='message-institut'>Item 4</div>
//       {/* Ajoutez plus d'éléments si nécessaire */}
//     </Carousel>
//   );
// };

// export default MyCarousel;
import './Message.scss';




// const Carousel = () => {
//   const [index, setIndex] = useState(0);

//   const comments = [
//     "Commentaire 1",
//     "Commentaire 2",
//     "Commentaire 3",
//     "Commentaire 4",
//     "Commentaire 5",
//     "Commentaire 6",
//   ];

//   const visibleComments = window.innerWidth > 640 ? 3 : 1; // 3 en desktop, 1 en mobile

//   const handleNext = () => {
//     if (index < comments.length - visibleComments) {
//       setIndex((prevIndex) => prevIndex + 1);
//     } else {
//       setIndex(0); // Retour au début
//     }
//   };

//   const handlePrev = () => {
//     if (index > 0) {
//       setIndex((prevIndex) => prevIndex - 1);
//     } else {
//       setIndex(comments.length - visibleComments); // Retour à la fin
//     }
//   };

//   return (
//     <div className="carousel-container">
//       <button className="carousel-btn left-btn" onClick={handlePrev}>
//         &#10094;
//       </button>
//       <div className="carousel">
//         <div
//           className="carousel-items"
//           style={{ transform: `translateX(-${index * (100 / visibleComments)}%)` }}
//         >
//           {comments.map((comment, idx) => (
//             <div className="carousel-item" key={idx}>
//               <p>{comment}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="carousel-btn right-btn" onClick={handleNext}>
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default Carousel;


import { useState } from 'react';

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const comments = [
    "Commentaire 1",
    "Commentaire 2",
    "Commentaire 3",
    "Commentaire 4",
    "Commentaire 5",
    "Commentaire 6",
  ];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % comments.length); // Retourne au premier commentaire après le dernier
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length); // Retourne au dernier commentaire après le premier
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn left-btn" onClick={handlePrev}>
        &#10094;
      </button>
      <div className="carousel">
        <div className="carousel-item">
          <p>{comments[index]}</p>
        </div>
      </div>
      <button className="carousel-btn right-btn" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
