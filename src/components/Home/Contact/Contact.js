import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="container  ">
            <hr className="my-5" />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4  text-start my-5  bg-dark text-white">
                <div className="col col-sm-12 col-md-6  p-5">
                    <h1 className="border-bottom border-5 d-inline">Contact</h1>
                    <p className="mt-5">Washington DC Office<br />
                        16 Florida Ave NE<br />
                        Washington, DC 20002<br />
                        202.506.2074</p>

                </div>
                <div className="col col-sm-12 col-md-6 p-5">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="First name please"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Last name please"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="fs-5 my-5 button">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;



