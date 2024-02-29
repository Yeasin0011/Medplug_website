import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Policies"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/lawyer.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          Lawyer will complete this part xD
        </div>
      </div>
    </Layout>
  );
};

export default Policy;