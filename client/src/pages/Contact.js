import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={'Contact us'} description={'Always there for you'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@medplug.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 000000000000000
          </p>
          <p className="mt-3">
            <BiSupport /> : 000000000000000
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;