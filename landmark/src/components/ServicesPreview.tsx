import React, { useEffect, useRef, useState } from 'react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Construction',
      description: 'Affordable housing, luxury apartments, and villas built with precision and quality craftsmanship.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      image: '/images/residential.jpg',
      features: ['Custom Homes', 'Apartments', 'Villas', 'Quality Assurance']
    },
    {
      id: 2,
      title: 'Commercial Projects',
      description: 'Office buildings, malls, and industrial complexes designed for functionality and business success.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      image: '/images/commercial.jpg',
      features: ['Office Spaces', 'Shopping Malls', 'Industrial', 'Commercial Complexes']
    },
    {
      id: 3,
      title: 'Real Estate Development',
      description: 'Comprehensive land acquisition, township development, and real estate sales services.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      image: '/images/real-estate.jpg',
      features: ['Land Acquisition', 'Township', 'Property Sales', 'Development']
    },
    {
      id: 4,
      title: 'Infrastructure Projects',
      description: 'Roads, bridges, and public works built with engineering excellence and durability.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      image: '/images/infrastructure.jpg',
      features: ['Roads & Highways', 'Bridges', 'Public Works', 'Civil Engineering']
    },
    {
      id: 5,
      title: 'Renovation & Interiors',
      description: 'Modernizing spaces with innovative interior design and quality renovation work.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      image: '/images/renovation.jpg',
      features: ['Interior Design', 'Space Modernization', 'Renovation', 'Custom Interiors']
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startAutoScroll = () => {
      scrollIntervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % services.length;
          
          if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = 352;
            const scrollPosition = nextIndex * cardWidth;
            
            container.scrollTo({
              left: scrollPosition,
              behavior: 'smooth'
            });
          }
          
          return nextIndex;
        });
      }, 5000);
    };

    startAutoScroll();

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [services.length]);

  // Get visible services for display
  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < Math.min(3, services.length); i++) {
      const index = (currentIndex + i) % services.length;
      visible.push(services[index]);
    }
    return visible;
  };

  // Get all services for the carousel (not just 3)
  const getAllCarouselItems = () => {
    const items = [];
    // Show all services in sequence for smooth scrolling
    for (let i = 0; i < services.length; i++) {
      const service = services[i];
      const isActive = i === currentIndex;
      
      items.push(
        <div 
          key={service.id}
          className={`flex-none bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 transform group ${
            isActive 
              ? 'w-96 scale-105 shadow-2xl border-2 border-blue-200 z-10' 
              : 'w-80 scale-95 opacity-90 hover:opacity-100 z-0'
          }`}
        >
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden bg-gray-100">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Use service-specific fallback images
                const fallbackImages = [
                  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800', // Residential
                  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800', // Commercial
                  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800', // Real Estate
                  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800', // Infrastructure
                  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800', // Renovation
                ];
                e.currentTarget.src = fallbackImages[service.id - 1] || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800';
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-all duration-300 ${
              isActive ? 'opacity-40' : 'opacity-30'
            }`}></div>
            
            {/* Icon Badge */}
            <div className={`absolute top-4 left-4 text-white p-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-110 shadow-lg' 
                : 'bg-blue-600'
            }`}>
              {service.icon}
            </div>

            {/* Active Indicator */}
            {isActive && (
              <div className="absolute top-4 right-4">
                <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg">
                  Featured
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-7">
            <h3 className={`font-bold mb-3 transition-colors duration-300 ${
              isActive 
                ? 'text-2xl text-blue-700' 
                : 'text-xl text-gray-800 group-hover:text-blue-600'
            }`}>
              {service.title}
            </h3>
            <p className={`mb-5 leading-relaxed ${
              isActive ? 'text-gray-700 text-base' : 'text-gray-600 text-sm'
            }`}>
              {service.description}
            </p>
            
            {/* Features List */}
            <div className="mb-7">
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className={`rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500' 
                        : 'w-1.5 h-1.5 bg-blue-400'
                    }`}></div>
                    <span className={`font-medium transition-colors duration-300 ${
                      isActive ? 'text-gray-800 text-sm' : 'text-gray-600 text-xs'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className={`w-full font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform ${
              isActive
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white group-hover:scale-105'
            }`}>
              Learn More
            </button>
          </div>
        </div>
      );
    }
    return items;
  };

  // Mobile view - Show only current card
  const getMobileCarouselItems = () => {
    const service = services[currentIndex];
    const isActive = true; // Always active in mobile view
    
    return (
      <div className="w-full flex justify-center">
        <div 
          key={service.id}
          className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 transform group border-2 border-blue-200 mx-4"
        >
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden bg-gray-100">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                const fallbackImages = [
                  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800',
                  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800',
                  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800',
                  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800',
                  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800',
                ];
                e.currentTarget.src = fallbackImages[service.id - 1] || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-40"></div>
            
            {/* Icon Badge */}
            <div className="absolute top-4 left-4 text-white p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 scale-110 shadow-lg">
              {service.icon}
            </div>

            {/* Active Indicator */}
            <div className="absolute top-4 right-4">
              <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg">
                Featured
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-7">
            <h3 className="font-bold mb-3 text-2xl text-blue-700">
              {service.title}
            </h3>
            <p className="mb-5 leading-relaxed text-gray-700 text-base">
              {service.description}
            </p>
            
            {/* Features List */}
            <div className="mb-7">
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <span className="font-medium text-gray-800 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full font-semibold py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-16 w-full bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction and development solutions tailored to meet your unique needs, 
            delivered with exceptional quality and professionalism.
          </p>
        </div>

        {/* Desktop View - Carousel */}
        <div className="hidden lg:block">
          <div className="flex justify-center">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-hidden space-x-8 max-w-6xl mx-auto items-center px-8"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {getAllCarouselItems()}
            </div>
          </div>
        </div>

        {/* Mobile View - Single Card */}
        <div className="lg:hidden">
          {getMobileCarouselItems()}
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Navigation Dots */}
        <div className="hidden lg:flex justify-center mt-12 space-x-3">
          {services.map((_, index) => (
            <button
              key={index}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 scale-125 shadow-lg' 
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => {
                setCurrentIndex(index);
                if (scrollContainerRef.current) {
                  const cardWidth = 352;
                  const scrollPosition = index * cardWidth;
                  scrollContainerRef.current.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .overflow-x-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ServicesPreview;