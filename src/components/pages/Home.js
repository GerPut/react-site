import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Info from '../Info';
import Services from '../Services';
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Info />
            <Services />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;
