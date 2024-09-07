import React, { useState } from "react";
import "../../Styling/HomePageComponents/Page4_contact.css";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true); // Set loading to true when starting to send the message
    try {
      const res = await axios.post(
        "https://rohitkcodes-portfolio.onrender.com/api/services/send-mail",
        { name: name, email: email, message: message }
      );
      if (res) {
        toast.success("Mail sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      toast.error("Failed to send mail.");
    } finally {
      setLoading(false); // Reset loading state after operation is complete
    }
  };

  return (
    <div className="page4 contact-page container" id="scrollspyHeading4">
      <div className="container-fluid card contact-card">
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <textarea
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Your Message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-danger rounded-3 w-100"
                    onClick={() => sendMessage()}
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? (
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
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
