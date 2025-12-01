import React from "react";
import { CheckCircle } from "lucide-react";

const About: React.FC = () => {
  return (
    <div id="/about-landmark-creations" className="w-full bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src="/about-hero2.jpg"
            className="w-full h-full object-cover"
            alt="Construction Hero"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-indigo-900/90"></div> */}
        </div></section>
        
        {/* Hero Content */}
        <section>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Building Dreams, <span className="text-yellow-400">Creating Legacies</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                For over a decade, we've been transforming visions into enduring structures 
                that stand as testaments to quality, innovation, and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 px-8 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Our Journey
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300">
                  Meet Our Team
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
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
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 shadow-2xl">
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

      {/* ================= EXPERIENCE HIGHLIGHTS ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          10+ Years of Excellence
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "150+", label: "Completed Projects" },
            { number: "10+", label: "Years Experience" },
            { number: "50+", label: "Skilled Professionals" },
            { number: "95%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-4xl font-bold text-blue-600">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
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

      {/* ================= TIMELINE ================= */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Journey
        </h2>

        <div className="max-w-4xl mx-auto space-y-8 border-l-4 border-blue-600 pl-6">
          {[
            { year: "2013", text: "Landmark Creations Established" },
            { year: "2015", text: "Completed 50+ Residential Projects" },
            { year: "2017", text: "Expanded to Commercial Construction" },
            { year: "2019", text: "Adopted Modern Engineering Technologies" },
            { year: "2021", text: "Major Infrastructure Projects Launched" },
            { year: "2024", text: "Achieved 150+ Completed Projects" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold text-blue-600">{item.year}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Meet Our Leadership
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { name: "Managing Director", img: "https://via.placeholder.com/400" },
            { name: "Project Manager", img: "https://via.placeholder.com/400" },
            { name: "Senior Architect", img: "https://via.placeholder.com/400" },
          ].map((member, i) => (
            <div key={i}>
              <img
                src={member.img}
                className="rounded-xl shadow-lg object-cover w-full h-64"
                alt={member.name}
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= AWARDS & CERTIFICATIONS ================= */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Awards & Certifications
        </h2>

        <p className="text-gray-600">
          ISO Certified • Govt Approved • Excellence Awards 2022 & 2023
        </p>
      </section>

      {/* ================= OUR PROCESS ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          How We Work
        </h2>

        <div className="grid md:grid-cols-5 gap-8 text-center">
          {[
            "Requirement Analysis",
            "Planning & Design",
            "Material Selection",
            "Execution & Quality Check",
            "Final Delivery",
          ].map((step, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-lg">
              <p className="font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            "Landmark Creations built our home exactly as promised with exceptional quality.",
            "Professional team, on-time delivery, and excellent communication.",
          ].map((review, i) => (
            <div key={i} className="bg-white shadow-lg p-6 rounded-xl">
              <p className="text-gray-600 italic">" {review} "</p>
              <p className="mt-4 font-semibold text-gray-800">— Client</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-gray-600 mb-6">
          We'd love to bring your ideas to life with our expertise.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default About;