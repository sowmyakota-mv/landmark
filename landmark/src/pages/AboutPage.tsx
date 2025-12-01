import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div id="/about-landmark-creations" className="w-full bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src="/about-hero1.jpg"
            className="w-full h-full object-cover mt-20"
            alt="Construction Hero"
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent"></div>
        </div>
        
        {/* Hero Text Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6 mt-32 md:mt-36">
          <h1 className="text-5xl md:text-4xl font-bold text-white mb-4">
            About Landmark Creations
          </h1>
          <div className="flex items-center justify-center space-x-2 text-red-800 text-lg md:text-xl ">
            <span className="font-semibold hover:text-white transition-colors cursor-pointer">
                <Link to="/">Home</Link></span>
            <span className="text-gray-900 ">&gt;&gt;</span>
            <span className="text-blue-400 font-semibold">About</span>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800"
                className="rounded-2xl shadow-2xl w-full h-auto"
                alt="Construction Team"
              />
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-4 shadow-2xl">
                  <div className="text-4xl font-bold mb-1">10+ Years</div>
                  <div className="text-sm font-medium">Of Excellence</div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Who We <span className="text-blue-600">Are</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  <span className="font-bold text-blue-700">Landmark Creations</span> is more than just a construction company - we're 
                  a team of passionate visionaries, skilled engineers, and dedicated craftsmen 
                  united by a common goal: to build structures that inspire, endure, and enrich communities.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  With over <span className="font-semibold text-blue-600">10+ years of industry leadership</span>, we've mastered the art 
                  of transforming ambitious blueprints into reality, delivering projects that 
                  consistently exceed expectations in quality, innovation, and value.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our journey is built on a foundation of integrity, precision, and an unwavering 
                  commitment to client satisfaction, making us the trusted choice for discerning 
                  clients across residential, commercial, and infrastructure sectors.
                </p>
              </div>
              
              {/* Key Points */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700 font-medium">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700 font-medium">500+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700 font-medium">98% Satisfaction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700 font-medium">Award Winning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION / VISION / VALUES ================= */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">Core Philosophy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every project, every decision, and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver <span className="font-semibold text-blue-600">sustainable, innovative, and quality</span> construction solutions that 
                  exceed client expectations while enhancing community development and 
                  setting new benchmarks in construction excellence.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the <span className="font-semibold text-purple-600">most trusted and preferred</span> construction partner globally, 
                  recognized for transforming architectural dreams into enduring landmarks 
                  through unparalleled quality, integrity, and innovation.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Integrity First", desc: "Transparent dealings, ethical practices" },
                    { title: "Quality Excellence", desc: "Uncompromising standards in every detail" },
                    { title: "Safety Commitment", desc: "Protecting people, property, planet" },
                    { title: "Client Partnership", desc: "Collaborative approach, shared success" },
                    { title: "Innovation Driven", desc: "Embracing technology, creative solutions" },
                  ].map((value, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-700">{value.title}</div>
                        <div className="text-sm text-gray-500">{value.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT MAKES US DIFFERENT ================= */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          What Makes Us Different
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            "End-to-end construction solutions under one roof",
            "Accurate timelines & transparent cost estimates",
            "Premium-quality materials & engineering precision",
            "Modern construction & project management technology",
            "Customized designs for every client",
            "Strong commitment to quality & safety",
          ].map((text, i) => (
            <div key={i} className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600" />
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Residential Construction",
            "Commercial Buildings",
            "Real Estate Development",
            "Infrastructure Projects",
            "Renovation & Restoration",
            "Interior Design & Planning",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service}</h3>
              <p className="text-gray-600">
                High-quality construction solutions tailored to meet client needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
<section className="py-16 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
    Our Team Collaboration
  </h2>
  
  <div className="max-w-4xl mx-auto text-center mb-12">
    <p className="text-gray-600 text-lg mb-6">
      At Landmark Creations, we believe that exceptional buildings are created by exceptional teams. 
      Our collaborative approach ensures that every project benefits from diverse expertise and 
      collective wisdom.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Cross-Functional Teams",
        content: "Architects, engineers, and project managers work together from concept to completion, ensuring seamless coordination and innovative solutions at every stage.",
        icon: "👥"
      },
      {
        title: "Collective Problem-Solving",
        content: "Challenges are addressed through team brainstorming sessions, leveraging diverse perspectives to find optimal construction solutions and overcome obstacles.",
        icon: "💡"
      },
      {
        title: "Regular Progress Reviews",
        content: "Weekly team meetings and digital dashboards keep everyone aligned on project milestones, timelines, and quality standards for transparent communication.",
        icon: "📊"
      },
      {
        title: "Shared Responsibility",
        content: "Every team member takes ownership of their domain while supporting colleagues, creating a culture of mutual accountability and pride in collective achievements.",
        icon: "🤝"
      },
      {
        title: "Continuous Learning",
        content: "Regular training sessions and knowledge sharing ensure our team stays updated with the latest construction technologies, materials, and sustainable practices.",
        icon: "📚"
      },
      {
        title: "Client Collaboration",
        content: "Our teams work closely with clients throughout the process, incorporating feedback and ensuring the final result aligns perfectly with vision and expectations.",
        icon: "🎯"
      }
    ].map((item, i) => (
      <div 
        key={i} 
        className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
      >
        <div className="text-4xl mb-4">{item.icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
        <p className="text-gray-600">{item.content}</p>
      </div>
    ))}
  </div>

  {/* Team Culture Highlight */}
  <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
    <div className="max-w-3xl mx-auto text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Our Team Culture: Building Together
      </h3>
      <p className="text-gray-600 text-lg mb-6">
        We've cultivated a work environment where collaboration isn't just encouraged—it's essential. 
        Our teams operate on principles of mutual respect, open communication, and shared passion 
        for construction excellence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="font-bold text-blue-600 text-lg mb-2">Open Communication</div>
          <p className="text-sm text-gray-600">Transparent dialogue across all levels and departments</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="font-bold text-blue-600 text-lg mb-2">Innovation Focus</div>
          <p className="text-sm text-gray-600">Encouraging creative solutions and new approaches</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="font-bold text-blue-600 text-lg mb-2">Quality Unity</div>
          <p className="text-sm text-gray-600">Shared commitment to exceptional craftsmanship</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;