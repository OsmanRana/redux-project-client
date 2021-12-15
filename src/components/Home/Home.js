import React from 'react';
import About from './About/About';
import HomeCarousel from './Carousel/HomeCarousel';
import Contact from './Contact/Contact';
import Navigation from './Navigation/Navigation';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeCarousel></HomeCarousel>
            <Services></Services>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;