import React from 'react';
import HomeCarousel from './Carousel/HomeCarousel';
import Navigation from './Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeCarousel></HomeCarousel>
            <h3>This is Home</h3>
        </div>
    );
};

export default Home;