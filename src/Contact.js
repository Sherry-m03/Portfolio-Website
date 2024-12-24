import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lvgk8kl", // Replace with your EmailJS Service ID
        "template_t75bvzl", // Replace with your EmailJS Template ID
        form.current,
        "6lc4Rnc88dfjGcM2u" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          form.current.reset(); // Clear the input fields after successful submission
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="portC-container">
        <div className="portC-screen">
          <div className="portC-screen-header">
            <div className="portC-screen-header-left">
              <div className="portC-screen-header-button portC-close"></div>
              <div className="portC-screen-header-button portC-maximize"></div>
              <div className="portC-screen-header-button portC-minimize"></div>
            </div>
            <div className="portC-screen-header-right">
              <div className="portC-screen-header-ellipsis"></div>
              <div className="portC-screen-header-ellipsis"></div>
              <div className="portC-screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="portC-screen-body">
            <div className="portC-screen-body-item portC-left">
              <div className="portC-app-title">
                <span>CONTACT</span>
                <span>INFO</span>
              </div>
            </div>
            <div className="portC-screen-body-item">
              <div id="contact-info">
                <img id="contact-icon" src="mail-icon.png"></img>
                <p id="contact-details">shreyamasta99@gmail.com</p>
              </div>
              <div id="contact-info">
                <img id="contact-icon" src="linkedin-icon.png"></img>
                <a
                  href="https://www.linkedin.com/in/shreya-masta/"
                  id="contact-details"
                >
                  /shreya-masta
                </a>
              </div>
              <div id="contact-info">
                <img id="contact-icon" src="github-icon.png"></img>
                <a href="https://github.com/Sherry-m03" id="contact-details">
                  /Sherry-m03
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
