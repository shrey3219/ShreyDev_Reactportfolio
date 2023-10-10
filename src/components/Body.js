import Home from "../subcomponentsbody/Home";
import About from "../subcomponentsbody/About";
import Service from "../subcomponentsbody/Service";
import PortfolioProjects from "../subcomponentsbody/Portfolioprojects";
import Contact from "../subcomponentsbody/Contact";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Body = () => {
  useEffect(() => {
  
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-img, .servcontainer, .portbox, .contact form', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-more', { origin: 'right' });

    return () => {
      sr.destroy(); 
    };
  }, []);
  return (
    <div>
      <Home />
      <About />
      <Service />
      <PortfolioProjects />
      <Contact />
    </div>
  );
};

export default Body;

