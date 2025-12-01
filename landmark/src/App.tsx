import './App.css';
import CallToAction from './components/CallToAction';
import CompanyOverview from './components/CompanyOverview';
import FeaturedProjects from './components/FeaturedProjects';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProcessOverview from './components/ProcessOverview';
import ServicesPreview from './components/ServicesPreview';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <>
      <div className="w-full">  
        <HeroSection/>
        <CompanyOverview/>
        <ServicesPreview/>
        <FeaturedProjects/>
        <WhyChooseUs/>
        <ProcessOverview/>
        <Testimonials/>
        <CallToAction/>
        <Footer/>        
        </div>
    </>
  );
}

export default App;