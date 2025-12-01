import React from 'react';

const ProcessOverview: React.FC = () => {
  const processSteps = [
    {
      id: 1,
      step: '01',
      title: 'Consultation',
      description: 'We begin with understanding your vision, requirements, and budget to create a tailored approach.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      duration: '1-2 Weeks',
      activities: ['Needs Assessment', 'Site Visit', 'Initial Discussion', 'Feasibility Study']
    },
    {
      id: 2,
      step: '02',
      title: 'Planning & Design',
      description: 'Our architects and engineers create detailed plans and 3D models for your approval.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      duration: '2-4 Weeks',
      activities: ['Architectural Design', 'Engineering Plans', '3D Visualization', 'Approval Process']
    },
    {
      id: 3,
      step: '03',
      title: 'Budgeting & Approval',
      description: 'Transparent cost breakdown and project timeline finalization before commencement.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      duration: '1-2 Weeks',
      activities: ['Cost Estimation', 'Contract Signing', 'Permit Acquisition', 'Resource Planning']
    },
    {
      id: 4,
      step: '04',
      title: 'Construction',
      description: 'Skilled execution with quality materials while maintaining regular progress updates.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      duration: 'Project Specific',
      activities: ['Foundation Work', 'Structural Development', 'Quality Checks', 'Progress Reporting']
    },
    {
      id: 5,
      step: '05',
      title: 'Inspection & Quality',
      description: 'Rigorous quality checks and inspections at every stage to ensure standards.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      duration: 'Ongoing',
      activities: ['Stage-wise Inspection', 'Quality Assurance', 'Safety Audits', 'Compliance Check']
    },
    {
      id: 6,
      step: '06',
      title: 'Handover & Support',
      description: 'Final walkthrough, documentation, and ongoing support after project completion.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      duration: '1 Week',
      activities: ['Final Inspection', 'Documentation', 'Warranty Details', 'After-Sales Support']
    }
  ];

  return (
    <section id="process" className="py-16 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Process Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured, step-by-step journey from concept to completion, ensuring clarity and precision at every stage.
          </p>
        </div>

        {/* Desktop Layout - Rectangular Roadmap */}
        <div className="hidden lg:block">
          {/* Top Row - First 3 Steps */}
          <div className="flex justify-between mb-12">
            {processSteps.slice(0, 3).map((step, index) => (
              <div key={step.id} className="w-80">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                  {/* Step Header */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                      <div className="flex items-center mt-1">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-sm text-blue-600 font-medium">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Icon */}
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center ml-auto">
                    {step.icon}
                  </div>
                </div>
                
                {/* Connecting Line to Bottom */}
                {index < 2 && (
                  <div className="relative">
                    <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-300 transform -translate-x-1/2"></div>
                    <div className="absolute top-12 left-1/2 w-32 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transform -translate-x-1/2"></div>
                    <div className="absolute top-12 right-0 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Row - Last 3 Steps */}
          <div className="flex justify-between">
            {/* Empty spacer for alignment */}
            <div className="w-80"></div>
            
            {/* Step 4, 5, 6 */}
            {processSteps.slice(3).map((step, index) => (
              <div key={step.id} className="w-80">
                {/* Connecting Line from Top */}
                <div className="relative mb-12">
                  <div className="absolute -top-12 left-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-300 transform -translate-x-1/2"></div>
                  <div className="absolute -top-12 left-0 w-32 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300"></div>
                  <div className="absolute -top-12 left-0 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-300"></div>
                </div>
                
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                  {/* Step Header */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                      <div className="flex items-center mt-1">
                        <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                        <span className="text-sm text-purple-600 font-medium">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Icon */}
                  <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center ml-auto">
                    {step.icon}
                  </div>
                </div>
                
                {/* Connecting Line to Next */}
                {index < 2 && (
                  <div className="relative">
                    <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-gradient-to-b from-purple-400 to-purple-300 transform -translate-x-1/2"></div>
                    <div className="absolute top-12 left-1/2 w-32 h-0.5 bg-gradient-to-r from-purple-400 to-purple-300 transform -translate-x-1/2"></div>
                    <div className="absolute top-12 right-0 w-0.5 h-12 bg-gradient-to-b from-purple-400 to-purple-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Central Timeline Line */}
          {/* <div className="absolute left-1/2 top-32 bottom-32 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 transform -translate-x-1/2 z-0"></div> */}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Central Timeline Line for Mobile */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 transform -translate-x-1/2 z-0"></div>
            
            {/* Process Steps */}
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex items-start relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 z-10"></div>
                  
                  {/* Step Card */}
                  <div className={`ml-12 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full border-l-4 ${
                    index < 3 ? 'border-blue-500' : 'border-purple-500'
                  }`}>
                    {/* Step Header */}
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm mr-4 ${
                        index < 3 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                          : 'bg-gradient-to-r from-purple-500 to-pink-600'
                      }`}>
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                        <div className="flex items-center mt-1">
                          <div className={`w-2 h-2 rounded-full mr-2 ${
                            index < 3 ? 'bg-blue-400' : 'bg-purple-400'
                          }`}></div>
                          <span className={`text-xs font-medium ${
                            index < 3 ? 'text-blue-600' : 'text-purple-600'
                          }`}>
                            {step.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Icon */}
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ml-auto ${
                      index < 3 ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                    }`}>
                      {step.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Streamlined Construction Journey</h3>
            <p className="text-blue-100 max-w-3xl mx-auto text-lg">
              From initial consultation to final handover, our structured process ensures transparency, 
              quality control, and timely delivery. Each phase builds upon the previous one, creating a 
              seamless flow that maximizes efficiency and minimizes disruptions.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <span className="font-bold text-white">6</span>
                <span className="ml-2 text-blue-100">Structured Phases</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <span className="font-bold text-white">24/7</span>
                <span className="ml-2 text-blue-100">Communication</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <span className="font-bold text-white">100%</span>
                <span className="ml-2 text-blue-100">Transparency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;