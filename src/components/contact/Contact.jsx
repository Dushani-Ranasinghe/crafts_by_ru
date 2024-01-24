import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import ContactImg from "../../assets/contact/contact1.jpg";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wg4mmbu",
      "template_wgcl5vi",
      form.current,
      "mdFbZUGSIn94Is73u"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      {/* <span className="section_subtitle">contact US</span> */}

      <div className="contact_container container grid">
        <div className="contact_content image_container">
          <img src={ContactImg} alt="Contact" className="contact_image" />
        </div>
        <div className="contact_content form_container">
          {/* <h3 className="contact_title"> Contact US</h3> */}
          <form className="contact_form" ref={form} onSubmit={sendEmail}>
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Enter your name"
              ></input>
            </div>
            <div className="contact_form-div">
              <label className="contact_form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Enter your email"
              ></input>
            </div>
            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Message</label>
              <textarea
                name="message"
                cols={30}
                rows={30}
                className="contact_form-input"
                placeholder="Write your message"
              ></textarea>
            </div>
            <div className="contact_button_container">
              <button href="#contact" className="button button--flex">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
