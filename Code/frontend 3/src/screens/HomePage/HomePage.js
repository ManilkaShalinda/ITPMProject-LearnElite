import React from "react";
import "./Home.css";
import img1 from "../../Assets/wastewater.jpg";
import img2 from "../../Assets/donate.jpg";
import img3 from "../../Assets/blog.jpg";
import img4 from "../../Assets/product.jpg";

function HomePage() {
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
              Courses for Quality Education
            </h3>
            <p className="px-5">
            users can explore a wide range of courses covering various subjects and disciplines. 
            Our courses are carefully curated and designed to meet the highest educational 
            standards, ensuring that learners receive valuable and relevant content. 
            We collaborate with experienced educators, subject matter experts, and 
            industry professionals to develop courses that foster critical thinking, 
            creativity, and practical application.
            </p>
          </div>
          <img src={img3} alt="Water" className="service-image" />
        </div>
        <div className="service-container">
          <img src={img2} alt="Donate" className="service-image" />
          <div className="service-text">
            <a href="/homedonation" className="tab">
              <h3> Donation for education </h3>
            </a>
            <p>
            We offer a Donation section where individuals and organizations 
            can make contributions to support our cause. All donations go 
            towards providing resources and support to children in rural areas, 
            ensuring that they have access to quality education and learning 
            opportunities.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-text">
            <h3>Counseling</h3>
            <p>
            Our counseling program is specifically tailored to address the unique needs and 
            challenges faced by students in rural areas. We recognize that students in rural 
            communities often encounter barriers to accessing mental health support and guidance 
            due to geographical distance, limited resources, and cultural factors. Our aim is to 
            bridge this gap by providing comprehensive counseling services that empower and support 
            rural area students in their personal, academic, and emotional well-being.
            </p>
          </div>
          <img
            src={img1}
            href="/article"
            alt="Education"
            className="service-image"
          />
        </div>
        <div className="service-container" style={{ paddingLeft: "20px" }}>
          <img src={img4} alt="Build" className="service-image" />
          <div className="service-text">
            <a href="/innovation" className="tab">
              <h3> Events, build your dreams</h3>
            </a>
            <p style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              Our various strategic partnerships across the globe allow us to
              bridge the gap to implementations, enabling technology companies
              to work closely with first adopters, helping These events offer a 
              glimpse into the rich tapestry of experiences that can be found in rural areas, showcasing the community spirit, cultural traditions, and appreciation for the natural environment.






            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;