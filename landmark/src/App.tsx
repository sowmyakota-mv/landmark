import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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
import About from './pages/AboutPage';
import Header from './components/Header';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={
      <div className="w-full">  
        <HeroSection/>
        <CompanyOverview/>
        <ServicesPreview/>
        <FeaturedProjects/>
        <WhyChooseUs/>
        <ProcessOverview/>
        <Testimonials/>
        <CallToAction/>
       </div> }/>
       <Route path='/about-landmark-creations' element={<About/>}/>
       </Routes> 
        <Footer/>       
        </Router>
    </>
  );
}

export default App;