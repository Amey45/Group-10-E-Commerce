import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 row-md-6">
          <img
            src="/images/privacy-policy.jpg"
            alt="about"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
          <h4>Prepared for: VIIT TY Project Division- C </h4>
          <h4>Created by: Group GC-10 </h4>
          <h4>Information Collected : Name , email , phone no , address </h4>
          <h4>
            Why is this Information Collected : For Authentication Purposes Only{" "}
          </h4>
          <h4>
            We Don't share the recorded Information with any third party without
            permission of the user
          </h4>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
