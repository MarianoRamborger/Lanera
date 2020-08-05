import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'
import CarouselElements from './ImageLoader'



 const CCarousel = () => {
    return (
        <div className="carousel-wrapper">
            <Carousel className="Carousel" infiniteLoop autoPlay showThumbs={false} >
               
                {/* TODO : Modular parámetros de las imagenes. Also, really, elegir mejores imagenes*/}

               {CarouselElements.map(element => {

                return(
                    <div key={element.name} className="car-img-div">
                        <img src={require(`${element.image}`)} className="carousel-image" alt={element.name}  />
                    </div>
                )

               })}
               
         
            </Carousel>
        </div>
    );
}

export default CCarousel