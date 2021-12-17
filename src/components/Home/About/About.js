import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        
        <div id="about" className="container ">
            <hr className="my-5" />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4  text-start my-5">
                <div className="col col-sm-12 col-md-6  px-5">
                    <h1 className="border-bottom border-5 d-inline">About</h1>
                    <h3 className="mt-5">Mission</h3>
                    <p>To build a high performance team that will earn financial freedom from providing high quality construction for our clients.</p>
                    <Link to="/servicesDetail" style={{textDecoration: 'none'}}><button className="fs-5 my-5 button">MEET OUR LEADERSHIP</button></Link>
                </div>
                <div className="col col-sm-12 col-md-6 bg-dark text-white p-5">
                    <h3>Core Values</h3>
                    <p><span className="fs-5">We are Inspirational</span> – We have a positive mindset and are focused on what is
                        possible.</p>
                    <p><span className="fs-5">We are disciplined</span> – We do what we say we are going to do.</p>
                    <p><span className="fs-5">We are accountable</span> – We strive for daily continuous improvements in our actions and
                        hold each other accountable.</p>
                    <p><span className="fs-5">We are transparent</span> – We openly communicate with one another.</p>
                    <p><span className="fs-5">We are aligned</span> – We are moving in the same direction and will do whatever it takes to
                        support our team.</p>
                    <p><span className="fs-5">We are results oriented</span> – We understand that at the end of the day we need to
                        produce quality work in a safe manner</p>
                </div>
            </div>
        </div>
    );
};

export default About;