import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={'About Us.'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <h4>Medplug is a revolutionary application designed to empower individuals and families to take control of their health.</h4>
          <li>
          Our Mission:
              <li>To make quality healthcare information and resources accessible to everyone, regardless of location, background, or technical expertise.</li>
              <li>To bridge the gap between patients and healthcare professionals by fostering communication, transparency, and collaboration.</li>
              <li>To empower individuals to become active participants in their own health journey, making informed decisions about their well-being.</li>
          </li>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;