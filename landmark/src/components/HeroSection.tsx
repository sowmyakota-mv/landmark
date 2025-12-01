import React, { useState, useEffect } from "react";
import Header from "./Header";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

   const slides = [
    {
      image: "/hero1.jpg",
      title: "We Build Innovative Spaces That Last for Generations"
    },
    {
      image: "/hero-2.jpg",
      title: "Precision-Engineered Steel Structures for Every Industry"
    },
    {
      image: "/hero03.jpg", 
      title: "Transforming Interiors with Modern, Stylish Renovation Designs"
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const slidePosition = index - currentSlide;
          
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                slidePosition === 0 
                  ? "translate-x-0 opacity-100" 
                  : slidePosition > 0 
                    ? "translate-x-full opacity-0" 
                    : "-translate-x-full opacity-0"
              }`}
            >
              {/* Background Image */}
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* White Gradient Overlay */}
{/* <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent"></div> */}

              {/* Title */}
<div
  className={`absolute top-76 md:top-90  md:right-20 z-30 md:w-1/2 transition-all duration-1000 ease-out delay-300 ${
    slidePosition === 0 
      ? "opacity-100 translate-x-0" 
      : "opacity-0 translate-x-10"
  }`}
>
  <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
    {slide.title}
  </h1>
</div>
            </div>
          );
        })}
      </div>

      {/* Header */}
      <Header />

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}
    </section>
  );
};

export default HeroSection;