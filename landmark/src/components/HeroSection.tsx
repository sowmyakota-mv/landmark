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
    <section id="/" className="relative w-full h-screen overflow-hidden">
      
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
  className={`absolute top-96 md:top-96  md:right-20 z-30 md:w-1/2 transition-all duration-1000 ease-out delay-300 ${
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
    </section>
  );
};

export default HeroSection;