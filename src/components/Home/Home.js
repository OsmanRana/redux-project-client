import React from 'react';
import Footer from '../Shared/Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;