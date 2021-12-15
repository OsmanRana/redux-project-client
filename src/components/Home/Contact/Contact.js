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
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">First Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="First name please"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Last name please"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="fs-5 my-5 button">SUBMIT</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;



