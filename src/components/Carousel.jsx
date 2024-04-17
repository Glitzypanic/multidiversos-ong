import { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "iconoir-react";

import "../styles/components_style/Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <ArrowLeftCircle className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, idx) => {
        return (
          <div key={idx} className={slide === idx ? "slide" : "slide-hidden"}>
            <img className="slide" src={item.src} alt={item.alt} />
            <span className="slide-description">{item.description}</span>
          </div>
        );
      })}
      <ArrowRightCircle className="arrow arrow-right" onClick={nextSlide} />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button 
              aria-label="indicator"
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
