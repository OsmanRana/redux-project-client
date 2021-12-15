import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel fade activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item>
                    <img
                        className="d-block w-100" 
                        src="https://images.squarespace-cdn.com/content/v1/5acb767750a54f99f58d8171/1604103929871-QZMHEIPKBFXFNKWADLPH/2600-broad-twi-4392-%28ZF-0562-82709-1-014%29.jpg?format=2500w"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.squarespace-cdn.com/content/v1/5acb767750a54f99f58d8171/1523982503599-QIFXJV4A5XHCFHCWFRDT/DukeWellness0107.jpg?format=2500w"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.squarespace-cdn.com/content/v1/5acb767750a54f99f58d8171/1604105547429-9I1RUK0QB56U13YJAE1R/Bojangles+2.jpg?format=2500w"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;