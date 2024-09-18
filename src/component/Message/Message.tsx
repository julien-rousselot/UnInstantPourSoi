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
import React, { useState } from 'react';
import './Message.scss';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const lastIndex = items.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const newIndex = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const lastIndex = items.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const newIndex = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getVisibleItems = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      return 1; // Mobile - affiche 1 item
    } else if (screenWidth < 1024) {
      return 2; // Tablette - affiche 2 items
    } else {
      return 3; // Desktop - affiche 3 items
    }
  };

  return (
    <div className="carousel">
      <button className="carousel-arrow left" onClick={prevSlide}>
        &lt;
      </button>
      <div className="carousel-content">
        {items
          .slice(currentIndex, currentIndex + getVisibleItems())
          .map((item, index) => (
            <div className="carousel-item" key={index}>
              {item}
            </div>
          ))}
      </div>
      <button className="carousel-arrow right" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;