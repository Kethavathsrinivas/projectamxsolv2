import React, { useState } from 'react';
import './TalentServices1.css'; // Import the CSS file
import image1 from '../assets/talent-solutions/1.png'; // Import the first image
import image2 from '../assets/talent-solutions/3.png'; // Import the second image
import image3 from '../assets/talent-solutions/4.png'; // Import the first image
import image4 from '../assets/talent-solutions/6.png'; // Import the second image
import image5 from '../assets/talent-solutions/7.png'; // Import the first image
import image6 from '../assets/talent-solutions/8.png'; // Import the second image


const TalentServices1 = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Function to toggle the visibility of the description
  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  const descriptions = [
    {
      title: 'IT Services',
      content: (
        <>
          <h4>OPTIMIZE KEY IT OPERATIONS</h4>
          <p>
            The success of your business means keeping ahead of the demands for needed IT services. Failure to do so heavily affects your competitiveness. But typically, it overwhelms your IT managers.
          </p>
          <p>
            AMXSOL∞Talent Services helps you compete. We offer broad IT services, with a strong record of accomplishment addressing time-consuming IT tasks, so IT managers can focus on higher-value-added activities.
          </p>
          <p>
            These activities must be done, but can create havoc if not done right. Our innovative managed IT services practice is purpose-built for supporting and optimizing your infrastructure operations by optimizing key IT Operations.
          </p>
          <p>
            But applications and operations management are only part of your challenge. We also help you deploy innovative solutions, from start to finish.
          </p>
          <p>
            AMXSOL∞Talent Services can streamline this process and ensure accuracy, rapid ROI, and smooth operations through our professional services practice.
          </p>
          <p>
            Another continuous challenge you face is maintaining ongoing quality of applications developed and released. If you spend too much time testing, your pipeline can be delayed. Too little, and you’re constantly reworking releases and upsetting users. AMXSOL∞Managed IT Services can take care of maintaining your infrastructure, so you can focus on more strategic projects.
          </p>
          <p>
            Our quality services practice experts have extensive experience streamlining quality assurance to ensure robust releases that minimize impact on development and release pipelines.
          </p>
          <p>
            Our comprehensive portfolio of services can facilitate your IT, improve how your IT works, save you money, enhance your operations and efficiency, and boost your competitiveness.
          </p>
        </>
      ),
    },
    {
      title: 'Professional Services',
      content: (
        <>
          <h4>FAST DEPLOYMENT, TIGHT INTEGRATION, HIGHER ROI</h4>
          <p>
            Purchasing a technology solution is the first step in using all its benefits. But often the deployment, integration, and ongoing maintenance can be a significant challenge. AMXSOL∞IT Consulting Services can help you.
          </p>
          <p>
            We collaborate with our technology partners to own or support all aspects of technology implementation. We have an extensive team of consultants with deep expertise in partner technologies to ensure you get maximum value from your investment.
          </p>
          <p>
            For example, are you deploying Microsoft or Amazon Web Services?
          </p>
          <p>
            We are a Microsoft and AWS partner, using our deep expertise in areas like .NET deployment, Microsoft 365 Enterprise, PowerBI, and Azure Cloud implementations and migrations.
          </p>
          <p>
            For all partner solution deployments, AMXSOL∞IT Consulting Services keeps it seamless and quick. Let us know how we can help you reduce time to completion.
          </p>
        </>
      ),
    },
    {
      title: 'Quality Services',
      content: (
        <>
          <h4>DRIVE BUSINESS GROWTH WITH BETTER APPLICATIONS</h4>
          <p>
            Getting new applications released fast can drive significant business growth. But sacrificing quality and security for speed is tremendously risky. Unfortunately, quality assurance usually acts as a drag on development speed.
          </p>
          <p>
            TO STREAMLINE THIS PROCESS, AMXSOL∞ PROVIDES CLIENTS WITH SEVERAL OPTIONS FOR QUALITY ASSURANCE:
          </p>
          <ul>
            <li>Full-cycle software testing services, both functional and non-functional, to avoid the hassle and cost of set up and management.</li>
            <li>Dedicated QA specialists for client-managed projects.</li>
          </ul>
          <li>Functional Testing: Unit Testing &gt;&gt;&infin; Integration Testing &gt;&gt;&infin; System Testing &gt;&gt;&infin; Acceptance Testing</li>
        <li>Non-Functional Testing: Performance Testing &gt;&gt;&infin; Security Testing &gt;&gt;&infin; Usability Testing &gt;&gt;&infin; Compatibility Testing</li>
          <p>
            OUR QA PRACTICE SPANS A VARIETY OF TESTING SCENARIOS:
          </p>
          <ul>
          <li>Manual &gt;&gt;&infin; Automation &gt;&gt;&infin; API &gt;&gt;&infin; Mobile &gt;&gt;&infin; QA Outsourcing &gt;&gt;&infin; Performance &gt;&gt;&infin; Security</li>
          </ul>
          <p>To know more contact us today &gt;&gt;</p>
        </>
      ),
    },
    {
      title: 'Managed Services',
      content: (
        <>
          <h4>PROACTIVE MANAGED SERVICES</h4>
          <p>
            Applications and infrastructure require a tremendous amount of maintenance slated to grow quickly as IT complexity deepens. This burns a considerable amount of staff time that can be put to better use.
          </p>
          <p>
            But standard, reactive management approaches are no longer enough. Proactive analytics and response keep operations running, while improving performance and minimizing downtime.
          </p>
          <p>
            AMXSOL∞ managed IT services team has the broad experience and deep expertise to keep your applications and infrastructure, customized for your operations and needs.
          </p>
          <p>
            We keep your critical business applications efficiently running 24/7/365, with a predictable cost structure, reducing risk and boosting ROI.
          </p>
          <h5>APPLICATIONS</h5>
          <p>
            Our applications management service (AMS) delivers continuous monitoring and functional and technical support, corrective response, remote management, and database administration.
          </p>
          <p>
            Our approach to AMS focuses on the following:
          </p>
          <ul>
        <li>Prevent &gt; Correct &gt; Perfect &gt; Adapt</li>
      </ul>
          <h5>INFRASTRUCTURE</h5>
          <p>
            Does your IT operations team have a lot of extra time on their hands? Probably not.
          </p>
          <p>
            AMXSOL∞ can offload your infrastructure management by offering a range of services that meet your IT goals, giving you budget relief and bandwidth to focus on more strategic projects.
          </p>
          <ul>
            <li>24/7/365 IT monitoring, management, and support</li>
            <li>24/7/365 help desk services</li>
            <li>Patch and security management</li>
            <li>Disaster recovery and business continuity</li>
            <li>Cloud services</li>
            <li>Technology lifecycle management</li>
          </ul>
          <p>
            PARTNERSHIP VS. TRANSACTION
          </p>
          <p>
            Instead of one and done projects, our goal is to become your partner and gain a deep understanding of your capabilities and needs so we can deliver long term, high quality results.
          </p>
          <p>PARTNER WITH US &gt;&gt;</p>
        </>
      ),
    },
    {
      title: 'GLOBAL MOBILITY',
      content: (
        <>
          <h4>CONNECT WITH TOP INTERNATIONAL TALENT</h4>
          <p>
            Sometimes you have to look farther than your own backyard to find the right talent for your business. AMXSOL has years of immigration expertise for visa sponsorship for IT professionals to expand our business and we can help you do the same.
          </p>
          <p>
            THE BENEFITS OF WORKING WITH AMXSOL∞
          </p>
          <ul>
            <li>We are always searching for highly qualified IT experts to support our clients.</li>
            <li>We provide immigration sponsorship to candidates who have at least a bachelor’s degree in Computer Science (or a related discipline) and multiple years of IT experience.</li>
          </ul>
          <p>
            OUR SUCCESS COMES FROM:
          </p>
          <ul>
            <li>Building strong relationships with our clients.</li>
            <li>Using rigorous screening methodologies for the candidates.</li>
            <li>Providing in-depth training programs.</li>
            <li>Delivering the best IT talent to the offers in the global market.</li>
          </ul>
        </>
      ),
    },
  ];


  return (
    <div className="subtalent-container">
      {/* First Section */}
      <section className="subtalent-section subtalent-section1">
        <div className="subtalent-background subtalent-background1">
          <div className="subtalent-overlay">
            <img className="subtalent-small-image" src={image1} alt="Overlay" />
            <h2 className="subtalent-title">SERVICES∞</h2>
          </div>
        </div>
        <div className="subtalent-content-row">
          <div className="subtalent-image subtalent-image1"></div>
          <div className="subtalent-content">
            <h3>Finding the right talent takes a lot of time and expertise</h3>
            <p>
              Our strategic solutions help to simplify the recruiting process by giving you access to our extensive talent community. We serve our clients from tech startups and mid-market organizations to the Fortune 100.
            </p>
          </div>
        </div>
      </section>

      {/* Repeated Section with New Background Image */}
      <section className="subtalent-section subtalent-section1">
        <div className="subtalent-background subtalent-background2">
          <div className="subtalent-overlay">
            <img className="subtalent-small-image" src={image2} alt="Overlay" />
            <h2 className="subtalent-title mobile-talent2">We provide the following services∞</h2>
          </div>
        </div>
        <div className="subtalent-content-row">
          <div className="subtalent-content">
          <div className="subtalent-buttons">
      <button className="talentsolution-button" onClick={() => handleButtonClick('/it-services')}>
        IT Services
        <div className="tooltip">IT Services</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/Businesssolution')}>
        Global Mobility Support
        <div className="tooltip">Global Mobility Support</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/contactmain')}>
        Contract
        <div className="tooltip">Contract</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/professional-services')}>
        Professional Services
        <div className="tooltip">Professional Services</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/finance-risk-management')}>
        Finance & Risk Management
        <div className="tooltip">Finance & Risk Management</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/direct-hire')}>
        Direct Hire
        <div className="tooltip">Direct Hire</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/quality-services')}>
        Quality Services
        <div className="tooltip">Quality Services</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/payroll-services')}>
        Payroll Services
        <div className="tooltip">Payroll Services</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/contract-hire')}>
        Contract Hire
        <div className="tooltip">Contract Hire</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/managed-services')}>
        Managed Services
        <div className="tooltip">Managed Services</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/staff-augmentation')}>
        Staff Augmentation
        <div className="tooltip">Staff Augmentation</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/recruitment-process-outsourcing')}>
        Recruitment Process Outsourcing (RPO)
        <div className="tooltip">Recruitment Process Outsourcing (RPO)</div>
      </button>
    </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="subtalent-section subtalent-section2">
      <div className="subtalent-titles">
        {descriptions.map((desc, index) => (
          <div
            key={index}
            className={`subtalent-collapsible ${activeSection === index ? 'active' : ''}`}
            onClick={() => toggleSection(index)}
          >
            <div className="subtalent-title-row">
              <h4>{desc.title} <span className='infinity'>∞</span></h4>
              <span className="subtalent-icon">{activeSection === index ? '▲' : '▼'}</span>
            </div>
            {activeSection === index && (
              <div className="subtalent-description">
                {desc.content}
                <p>
                  For more information <a href="/contact-us">Contact us today &gt;&gt;</a>
                </p>
                <div className="subtalent-connect">
                  <p>Connect with us on:</p>
                  <div className="subtalent-icons">
                  <a href="https://www.linkedin.com/company/amxsol" target="_blank" rel="noopener noreferrer">| in |</a>
            <a href="https://x.com/amxsol?mx=2" target="_blank" rel="noopener noreferrer">X |</a>
            <a href="https://www.facebook.com/amxsol" target="_blank" rel="noopener noreferrer">f |</a>
            <a href="https://www.youtube.com/@amxsol" target="_blank" rel="noopener noreferrer">Y |</a>
            <a href="https://api.whatsapp.com/send?phone=your-number" target="_blank" rel="noopener noreferrer">✆ |</a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">✉ |</a>
            <a href="/your-other-page" target="_blank" rel="noopener noreferrer">🕸 |</a>
                  </div>
                </div>
              </div>
            )}
            <hr className="subtalent-divider" />
          </div>
        ))}
      </div>
    </section>





    <section className="subtalent-section subtalent-section1">
        <div className="subtalent-background subtalent-background1">
          <div className="subtalent-overlay">
            <img className="subtalent-small-image" src={image3} alt="Overlay" />
            <h2 className="subtalent-title">SPECIALITIES∞</h2>
          </div>
        </div>
        <div className="subtalent-content-row">
          <div className="subtalent-image subtalent-image2"></div>
          <div className="subtalent-content">
            <h3>Trying to find a specialty that fits your needs?</h3>
            <p>
            Our Team have specific areas of expertise and are ready to help you to reach your demanding business goals. We offer broad IT services with a strong track record, empowering IT leaders to focus on growing the business.
            </p>
          </div>
        </div>
      </section>

      {/* Repeated Section with New Background Image */}
      <section className="subtalent-section subtalent-section1">
        <div className="subtalent-background subtalent-background2">
          <div className="subtalent-overlay">
            <img className="subtalent-small-image" src={image4} alt="Overlay" />
            <h2 className="subtalent-title mobile-talent">We have a wide array of specialties to serve you∞</h2>
            <img className="subtalent-small-image" src={image5} alt="Overlay" />
            <img className="subtalent-small-image" src={image6} alt="Overlay" />
          </div>
        </div>
        <div className="subtalent-content-row">
          <div className="subtalent-content">
          <div className="subtalent-buttons">
      <button className="talentsolution-button" onClick={() => handleButtonClick('/Businesssolution')}>
        Application Development∞
        <div className="tooltip">Application Development∞</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/Businesssolution')}>
        ERP Services∞
        <div className="tooltip">ERP Services∞</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/Businesssolution')}>
        Product Management∞
        <div className="tooltip">Product Management∞</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/Businesssolution')}>
        AI/ML/IA/Robotics∞
        <div className="tooltip"> AI/ML/IA/Robotics∞</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/Businesssolution')}>
        IT Infrastructure∞
        <div className="tooltip">IT Infrastructure∞</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/Businesssolution')}>
        WEB Development∞
        <div className="tooltip">WEB Development∞</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/Businesssolution')}>
        Business Intelligence∞
        <div className="tooltip">Business Intelligence∞</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/Businesssolution')}>
        Project Management∞
        <div className="tooltip"> Project Management∞</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/Businesssolution')}>
        Cybesecurity∞
        <div className="tooltip"> Cybesecurity∞</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/Businesssolution')}>
        Database/design Engineerig∞
        <div className="tooltip">Database/design Engineerig∞</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/Businesssolution')}>
        Quality Assurance∞
        <div className="tooltip">Quality Assurance∞</div>
      </button>
      <button className="talentsolution-button" onClick={() => handleButtonClick('/Businesssolution')}>
        Managed IT Services∞
        <div className="tooltip">Managed IT Services∞</div>
      </button>
    </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalentServices1;
