import React from "react";
import "./Services2.css"; // Import the CSS file
import i1 from '../assets/talent-solutions/j1.jpg';
import i2 from '../assets/talent-solutions/j2.jpg';
import i3 from '../assets/talent-solutions/j3.jpg';
import image1 from "../assets/talent-solutions/j4.jpg"; // Import the images
import image2 from "../assets/talent-solutions/j5.jpg";
import image3 from "../assets/talent-solutions/j6.jpg";
import image4 from "../assets/talent-solutions/j7.jpg";
import image5 from "../assets/talent-solutions/j8.jpg";
import image6 from "../assets/talent-solutions/j9.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const Services2 = () => {
  return (
    <div className="talentservices2-container">
      {/* Section 1: Header Lines */}
      <div className="talentservices2-header">
        <h1>
          YOUR JOB SEARCH <span className="highlight-red">ENDS HERE</span>
        </h1>
        <h2>
          <span className="highlight-red">WE PROVIDE</span> INNOVATIVE AND COST
          EFFECTIVE STAFFING SOLUTIONS
        </h2>
      </div>

      {/* Section 2: Three Image Grid with Headings and Descriptions */}
      <div className="talentservices2-image-section">
        <div className="talentservices2-card">
          <img src={i1} alt="Dedicated Team" />
          <h3 className="talentservices2-card-title">Dedicated Team</h3>
          <p className="talentservices2-description">
            We have a team focused on identifying opportunities for diverse and
            veteran candidates with our employer partners and supported
            programs. Each client is assigned a dedicated team to manage their
            account, delivery, consultant care, and compliance. It’s just one
            more way we ensure nothing slips through the cracks.
          </p>
        </div>

        <div className="talentservices2-card">
          <img src={i2} alt="Extended Network" />
          <h3 className="talentservices2-card-title">Extended Network</h3>
          <p className="talentservices2-description">
            We extend our reach and network to increase our sourcing
            capabilities. Sponsoring, volunteering, partnering, and networking
            with various minorities, women, veterans, military spouses,
            differently-abled, and other diverse organizations. This expands
            opportunities for both our clients and our candidates.
          </p>
        </div>

        <div className="talentservices2-card">
          <img src={i3} alt="Strategic Investments" />
          <h3 className="talentservices2-card-title">Strategic Investments</h3>
          <p className="talentservices2-description">
            We invest in world-class systems and tools, including video
            interviews, enhanced candidate/consultant engagement journeys, AI
            sourcing capabilities to attract, recruit, and retain top TALENT,
            including Veterans and diverse candidates.
          </p>
        </div>
      </div>

      {/* Section 3: Six Image Grid with Titles */}
      <div className="talentservices2-grid-section">
      {[
        "Information Technology Staffing",
        "Professional Staffing",
        "Cybersecurity Staffing",
        "Government Staffing",
        "Veteran Staffing",
        "Healthcare Staffing",
      ].map((title, index) => (
        <div key={index} className="talentservices2-grid-card">
          <img src={images[index]} alt={title} />
          <h4>{title}</h4>
        </div>
      ))}
    </div>

      {/* Section 4: Background Image with Text and Buttons */}
      <div className="talentservices2-banner">
        <div className="talentservices2-banner-content">
          <h1>GLOBALLY</h1>
          <h2>KEEPING PEOPLE</h2>
          <h3>AT WORK</h3>
          <div className="talentservices2-buttons">
            <button onClick={() => window.open("https://forms.google.com", "_blank")}>
              FIND JOBS
            </button>
            <button onClick={() => window.open("https://forms.google.com", "_blank")}>
              HIRE TALENT
            </button>
          </div>
        </div>
      </div>

      {/* Section 5: Approach to Partnership */}
      <div className="talentservices2-partnership">
        <h2>OUR APPROACH TO PARTNERSHIP</h2>
        <p>
          Our focus is on building long-term client relationships. By becoming
          partners and trusted advisors, we are able to truly understand and
          anticipate our clients’ unique needs. This includes strategically
          placing offices across North America and India so we can help our
          clients on a very personal level based on their geographic locations.
          By doing this, we successfully help organizations achieve significant
          ROI ahead of schedule and below budget.
        </p>
        <p>
          We also believe that happy employees take good care of customers, so
          we are people-centric and strive to create an environment that
          nurtures and empowers our employees. By prioritizing the needs of our
          employees, we prioritize the needs of our clients, creating a company
          culture driven to exceed expectations.
        </p>
        <a href="partnership-url" className="partner-link">
          PARTNER WITH US &gt;&gt;∞
        </a>
        <div className="talentservices2-social-icons">
          <p>Connect with us on: <a href="https://www.linkedin.com/company/amxsol" target="_blank" rel="noopener noreferrer">| in |</a>
            <a href="https://x.com/amxsol?mx=2" target="_blank" rel="noopener noreferrer">X |</a>
            <a href="https://www.facebook.com/amxsol" target="_blank" rel="noopener noreferrer">f |</a>
            <a href="https://www.youtube.com/@amxsol" target="_blank" rel="noopener noreferrer">Y |</a>
            <a href="https://api.whatsapp.com/send?phone=your-number" target="_blank" rel="noopener noreferrer">✆ |</a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">✉ |</a>
            <a href="/your-other-page" target="_blank" rel="noopener noreferrer">🕸 |</a></p>
        </div>
      </div>
    </div>
  );
};

export default Services2;
