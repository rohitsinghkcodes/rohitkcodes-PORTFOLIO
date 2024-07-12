import React from "react";
import "../../Styling/HomePageComponents/Page4_contact.css";


const Contact = () => {
  return (
    <div className="page4 contact-page container " id="scrollspyHeading4">
      <div className=" container-fluid card contact-card">
        <h1>Let's Connect</h1>
        <div className="row text-start align-items-center d-flex justify-content-lg-around">
          <div className="col-lg-4 order-lg-1 order-1 d-flex justify-content-center">
            <img
              className="img-fluid img-mail"
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWFpM3lsN2I4N3B1eTA3NmFlazl6NnhqNHRreW1vaGF4YWR4dGk5ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/gx3La9ga8VTfmmEMyn/giphy.gif"
              alt="Logo"
            />
          </div>
          <div className="col-lg-6 order-lg-2 order-2">
            <div className="card c-card p-5 rounded-5">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                  />
                  <textarea
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Your Message"
                    rows={4}
                  />
                  <div className="btn btn-danger rounded-3 w-100">Send Message</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
