import React from "react";
import Carousel from "react-bootstrap/Carousel"; //Importing Carousel by Bootstrap

function Slider({slides}) {
    return (
        <Carousel className="w-50 mx-auto">
        {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
                <img
                className="d-block w-100 rounded" 
                src={slide.src} 
                alt={slide.alt} />
                <Carousel.Caption>
                    <h3>{slide.h3}</h3>
                    <p>{slide.p}</p>
                </Carousel.Caption>
            </Carousel.Item>

        ))}
            
        </Carousel>

    )
}

export default Slider;