import React from "react";
import "./Home.css";
import img1 from "../../Assets/wastewater.jpg";
import img2 from "../../Assets/donate.jpg";
import img3 from "../../Assets/blog.jpg";
import img4 from "../../Assets/product.jpg";

function Home() {
  return (
    <div>
      <div className="banner">
        <h1 style={{ fontSize: "90px" }}>Education,</h1>
        <p style={{ fontSize: "50px" }}>TO EVERY LIVING ORGANISM</p>
      </div>
      <div className="services">
        <div className="title">
          <h2>Our Services</h2>
        </div>
        <div className="service-container">
          <div className="service-text">
            <h3 className="pt-5">
              Wastewater Treatment & Water Quality Monitoring
            </h3>
            <p className="px-5">
              Wastewater treatment is the process of removing contaminants from
              wastewater to make it safe for discharge into the environment or
              reuse. Water quality monitoring is the practice of testing and
              analyzing water samples to assess their quality and ensure that
              they meet certain standards for human consumption, recreational
              use, or environmental protection. Regular water quality monitoring
              is important for ensuring that water resources are safe for humans
              and aquatic life, and for identifying and addressing potential
              pollution sources.
            </p>
          </div>
          <img src={img1} alt="Water" className="service-image" />
        </div>
        <div className="service-container">
          <img src={img2} alt="Donate" className="service-image" />
          <div className="service-text">
            <a href="/alldo" className="tab">
              <h3> Donate Now </h3>
            </a>
            <p>
              Support our cause and help us provide clean and safe water to
              communities in need. Your donation can make a real difference in
              improving the lives of people around the world. provides an easy
              way for people to make a financial contribution towards supporting
              water management initiatives. By donating, individuals can help
              fund important projects such as clean water access, conservation
              efforts, and water quality monitoring.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-text">
            <h3>Education and Knwoladge</h3>
            <p>
              Learn more about water management, conservation, and
              sustainability through our educational resources and expert
              insights. Our goal is to empower individuals and organizations to
              make a positive impact on the environment and society. It provides
              resources such as articles, videos, and educational materials to
              help people understand topics such as water conservation,
              pollution prevention, and sustainable water use
            </p>
          </div>
          <img
            src={img3}
            href="/article"
            alt="Education"
            className="service-image"
          />
        </div>
        <div className="service-container" style={{ paddingLeft: "20px" }}>
          <img src={img4} alt="Build" className="service-image" />
          <div className="service-text">
            <a href="/innovation" className="tab">
              <h3> Build your dreams</h3>
            </a>
            <p style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              Our various strategic partnerships across the globe allow us to
              bridge the gap to implementations, enabling technology companies
              to work closely with first adopters, helping to scale effective
              solutions, faster. Our activities are largely funded by public or
              philanthropic agencies with a goal of stimulating opportunities
              for industry development and enhanced water sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
