import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    return (
        <div className='container  mt-5 '>
            <h1 className='border-bottom border-5 d-inline'>SERVICES</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 d-flex justify-content-sm-center justify-content-md-center justify-content-lg-between ">
                <div className="col col-sm-12 col-md-12 col-lg-4 my-5  serviceDiv " style={{
                    backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5acb767750a54f99f58d8171/1547650282237-DFCN6M6G3IAY50GX3UE5/image-asset.jpeg?format=500w")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    padding: '0',
                    width: '100%',
                    maxWidth: '400px'

                }}>
                    
                    <div className='my-5 d-flex align-items-center justify-content-center'>
                        <div>
                            <h3 className="mt-5 text-white">CONSTRUCTION</h3>
                            <Link to="/servicesDetail"><button className="fs-6 mt-3 mb-5 serviceButton">SEE DETAILS</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-4 my-5 serviceDiv" style={{
                    backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5acb767750a54f99f58d8171/1523984649005-NJI9MMV84G1BUZQ6FAQM/IMG_9405HDR-Edit+-+Copy.jpg?format=500w")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    padding: '0',
                    width: '100%',
                    maxWidth: '400px'
                }}>
                    <div className='my-5 d-flex align-items-center justify-content-center'>
                        <div>
                            <h3 className="mt-5 text-white">DESIGN BUILD</h3>
                            <Link to="/servicesDetail"><button className="fs-6 mt-3 mb-5 serviceButton">SEE DETAILS</button></Link>
                        </div>
                    </div>

                </div>
                <div className="col col-sm-12 col-md-12 col-lg-4 my-5 serviceDiv " style={{
                    backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5acb767750a54f99f58d8171/1523984687577-ME40YVVE4BEU07HCX41I/4Q3A9824_AuroraHDR2018-edit-Edit.jpg?format=500w")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    padding: '0',
                    width: '100%',
                    maxWidth: '400px'
                }}>
                    <div className='my-5 d-flex align-items-center justify-content-center'>
                        <div>
                            <h3 className="mt-5 text-white">DESIGN BID BUILD</h3>
                            <Link to="/servicesDetail"><button className="fs-6 mt-3 mb-5 serviceButton">SEE DETAILS</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;