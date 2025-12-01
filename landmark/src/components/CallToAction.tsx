import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-6 w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Construction Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80')`,
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/80 to-indigo-900/85"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-6 relative z-10">
        {/* Flex container for side-by-side layout */}
        <div className="flex items-center justify-between md:p-8">
          
          {/* Left side - Text content */}
          <div className="max-w-1/2">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              Start Your Construction Journey
            </h2>
            
            {/* Small Paragraph */}
            <p className="text-blue-100 text-sm md:text-lg">
              Transform your vision into reality with expert construction solutions. 
              Let's build something extraordinary together.
            </p>
          </div>
          
          {/* Right side - Button */}
          <div className='md:mr-30'> 
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-2 md:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
              Begin Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;