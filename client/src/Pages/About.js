import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - HaveAriz app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="about"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            We Are Group of 5 people studying in VIIT College. We are pursuing
            CSE degree and this is our submission for the subject 'Project TY'.
            We are very hard working as a group and we always wanted to
            contribute our technical knowledge in the business domain, And we
            are glad that we got the chance to do that with the help of this
            E-Commerce app that we created.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
