import React, { useState, useEffect } from 'react';

const FeaturedProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Skyline Luxury Apartments',
      category: 'residential',
      type: 'Luxury Residential',
      location: 'Downtown Business District',
      year: '2023',
      image: '/skyline.jpg',
      description: 'Modern luxury apartments with premium amenities and sustainable design features.'
    },
    {
      id: 2,
      title: 'TechHub Corporate Park',
      category: 'commercial',
      type: 'Office Complex',
      location: 'Tech Valley',
      year: '2023',
      image: '/park.jpg',
      description: 'State-of-the-art office complex designed for technology companies and startups.'
    },
    {
      id: 3,
      title: 'Green Valley Township',
      category: 'real-estate',
      type: 'Integrated Township',
      location: 'Suburban Area',
      year: '2022',
      image: '/township.jpg',
      description: 'Sustainable township development with residential, commercial, and recreational spaces.'
    },
    {
      id: 4,
      title: 'Riverfront Bridge Project',
      category: 'infrastructure',
      type: 'Bridge Construction',
      location: 'River City',
      year: '2023',
      image: '/bridge.jpg',
      description: 'Modern cable-stayed bridge connecting two major districts with innovative engineering.'
    },
    {
      id: 5,
      title: 'Heritage Villa Renovation',
      category: 'renovation',
      type: 'Heritage Restoration',
      location: 'Historic District',
      year: '2022',
      image: '/villa.jpg',
      description: 'Complete restoration and modernization of a century-old heritage villa.'
    },
    {
      id: 6,
      title: 'Metro Shopping Mall',
      category: 'commercial',
      type: 'Shopping Complex',
      location: 'Central Business District',
      year: '2023',
      image: '/shopping.jpg',
      description: 'Multi-level shopping mall with international brands and entertainment facilities.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveProject((prev) => (prev + 1) % projects.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const nextProject = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
      setIsTransitioning(false);
    }, 500);
  };

  const prevProject = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToProject = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveProject(index);
      setIsTransitioning(false);
    }, 500);
  };

  const getPreviewProjects = () => {
    const previews = [];
    const total = projects.length;
    
    // Get next 3 projects for preview (excluding current)
    for (let i = 1; i <= 3; i++) {
      const index = (activeProject + i) % total;
      previews.push(projects[index]);
    }
    
    return previews;
  };

  return (
    <section id="projects" className="py-16 w-full bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of exceptional construction projects that showcase our commitment 
            to quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Desktop Main Project Showcase Container */}
        <div className="hidden lg:block relative h-[700px] rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div 
            className={`absolute inset-0 transition-all duration-700 ${
              isTransitioning ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
            }`}
          >
            <img 
              src={projects[activeProject].image} 
              alt={projects[activeProject].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Project Content Overlay */}
          <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-700 ${
            isTransitioning ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
          }`}>
            <div className="max-w-2xl">
              {/* Category and Year */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {projects[activeProject].type}
                </span>
                <span className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                  {projects[activeProject].year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {projects[activeProject].title}
              </h3>

              {/* Location */}
              <div className="flex items-center text-gray-300 mb-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg">{projects[activeProject].location}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-6 max-w-2xl">
                {projects[activeProject].description}
              </p>

              {/* CTA Button */}
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                View Project Details
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Preview Images - Horizontal at bottom */}
          <div className="absolute bottom-8 left-[820px] transform -translate-x-1/4">
            <div className="flex gap-6">
              {getPreviewProjects().map((project, index) => (
                <div 
                  key={project.id}
                  className={`relative group cursor-pointer transition-all duration-500 transform ${
                    index === 0 
                      ? 'scale-110 -translate-y-2 shadow-2xl' 
                      : 'scale-100 hover:scale-105'
                  }`}
                  onClick={() => goToProject((activeProject + index + 1) % projects.length)}
                >
                  {/* Preview Image Container */}
                  <div className="w-40 h-32 rounded-lg overflow-hidden shadow-lg border-2 border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
                  </div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h4 className="text-sm font-semibold text-white mb-1">{project.title}</h4>
                    <p className="text-xs text-gray-300">{project.type}</p>
                  </div>

                  {/* Next Indicator */}
                  {index === 0 && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full animate-pulse shadow-lg whitespace-nowrap">
                        Next Project
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {/* <button 
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}
        </div>

        {/* Mobile Main Project Showcase Container */}
        <div className="lg:hidden">
          {/* Mobile Main Project Image */}
          <div className="relative h-[660px] rounded-2xl overflow-hidden mb-8">
            <div 
              className={`absolute inset-0 transition-all duration-700 ${
                isTransitioning ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
              }`}
            >
              <img 
                src={projects[activeProject].image} 
                alt={projects[activeProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
          

          {/* Mobile Project Content */}
          <div className={`transition-all duration-700 ${
            isTransitioning ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
          }`}>
            <div className="mb-8 mt-60">
              {/* Category and Year */}
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold">
                  {projects[activeProject].type}
                </span>
                <span className="bg-white text-gray-800 px-4 py-2 rounded-full text-xs font-semibold">
                  {projects[activeProject].year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-2">
                {projects[activeProject].title}
              </h3>

              {/* Location */}
              <div className="flex items-center text-gray-300 mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">{projects[activeProject].location}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-2">
                {projects[activeProject].description}
              </p>

              {/* CTA Button */}
              <button className="w-1/2 bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                View Project Details
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Mobile Preview Images - Below Content */}
            <div className='mt-4'>
              {/* <h4 className="text-xl font-bold text-white mb-4">Upcoming Projects</h4> */}
              <div className="flex gap-4  pb-4">
                {getPreviewProjects().map((project, index) => (
                  <div 
                    key={project.id}
                    className="flex-none relative group cursor-pointer"
                    onClick={() => goToProject((activeProject + index + 1) % projects.length)}
                  >
                    {/* Preview Image Container */}
                    <div className="w-40 h-32 rounded-lg overflow-hidden shadow-lg border-2 border-white/20 group-hover:border-white/40 transition-all duration-300">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="mt-2">
                      <h5 className="text-sm font-semibold text-white mb-1 line-clamp-1">
                        {project.title}
                      </h5>
                      <p className="text-xs text-gray-300">{project.type}</p>
                    </div>

                    {/* Next Indicator for first preview */}
                    {index === 0 && (
                      <div className="absolute -top-2 -right-2">
                        <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse shadow-lg">
                          Next
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-300 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
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
      `}</style>
    </section>
  );
};

export default FeaturedProjects;