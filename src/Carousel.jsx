import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./Carousel.scss";

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [className, setClassName] = useState("");

  return (
    <div className="carousel">
      <div className={className}>
        <TransitionGroup>
          <CSSTransition
            timeout={1000}
            classNames="carousel-item"
            key={currentSlide}
          >
            <div className="carousel-item">{children[currentSlide]}</div>
          </CSSTransition>
        </TransitionGroup>

        <button
          className="button"
          onClick={() => {
              setClassName("back");
              setCurrentSlide(
                  (currentSlide - 1 + children.length) % children.length
              );
          }}
        >
          ←
        </button>
        <button
          className="button"
          onClick={() => {
            setClassName("");
            setCurrentSlide((currentSlide + 1) % children.length);
          }}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
