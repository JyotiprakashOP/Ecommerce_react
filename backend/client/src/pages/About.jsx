import React from "react";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-5 mt-4">
            <img
              src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-669.jpg?size=626&ext=jpg&ga=GA1.1.1113429738.1712847705&semt=ais_hybrid"
              alt="AboutUs"
            />
          </div>
          <div className="col-7 mt-" style={{marginTop:'10rem'}}>
            <h3><b>What we do</b></h3>
            <p className="px-5">
              When things are clear, easy and relevant for patients, providers
              form stronger relationships, minimize administrative burden and
              achieve better financial results, so what's good for patients is
              good for providers. At Cedar, we foster that mutually beneficial
              relationship through proven expertise and modern technology. We
              combine the best techniques of fintech, ad tech, consumer and
              healthcare to help providers understand and engage patients more
              effectively.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
