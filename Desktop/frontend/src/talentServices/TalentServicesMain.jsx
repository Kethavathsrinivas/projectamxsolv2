import React from 'react';
import './TalentServicesMain.css'; // Importing the CSS file
import TalentServices1 from './TalentServices1';
import Services2 from './Services2';

const TalentServicesMain = () => {
  return (
    <div className='talentmain-total'>
    <div className="talentmain-container">
      <div className="talentmain-left">
        <div className="talentmain-content-overlay">
          <h2 className="talentmain-title">What we do / Talent Solutions</h2>
          <p className="talentmain-description">
            We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.
          </p>
          <div className="talentmain-buttons">
            <button onClick={() => window.location.href='/Businesssolution'}>Business Solutions</button>
            <button onClick={() => window.location.href='/techsolutions'}>Technology Solutions</button>
            <button onClick={()=>window.location.href='/talent'}>Talent Solutions</button>
          </div>
          <p className="talentmain-subtext">Looking for something else?</p>
          <button className="talentmain-request-button" onClick={() => window.location.href='https://forms.google.com/contact-us'}>Request for Services</button>
        </div>
      </div>
      <div className="talentmain-right">
        <h1 className="talentmain-right-title">AMXSOL Talent Solutions</h1>
        <h3 className="talentmain-right-subtitle">"Connecting Talent with Opportunity"</h3>
        <p className="talentmain-right-description">
          Providing businesses with top quality talent solutions and services with multi specialties at a lower cost.
        </p>
        <p className="talentmain-contact"><span className='contact-bold'>Contact us for </span>∞infinite possibilities</p>
        <div className="talentmain-services">
          <p>Business Solutions  |  Technology Solutions  |  Talent Solutions</p>
        </div>
        <div className="talentmain-connect">
          <p>Connect with us on: <a href="https://www.linkedin.com/company/amxsol" target="_blank" rel="noopener noreferrer">| in |</a>
            <a href="https://x.com/amxsol?mx=2" target="_blank" rel="noopener noreferrer">X |</a>
            <a href="https://www.facebook.com/amxsol" target="_blank" rel="noopener noreferrer">f |</a>
            <a href="https://www.youtube.com/@amxsol" target="_blank" rel="noopener noreferrer">Y |</a>
            <a href="https://api.whatsapp.com/send?phone=your-number" target="_blank" rel="noopener noreferrer">✆ |</a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">✉ |</a>
            <a href="/your-other-page" target="_blank" rel="noopener noreferrer">🕸 |</a></p>
        </div>
        <p className="talentmain-footer">SERVICES | SOLUTIONS | PARTNER WITH US</p>
      </div>
    </div>

<div className='talentmain-underimage'>
<h1 className='talent-title'>About AMXSOL Talent Solutions </h1>
<h7 >"Connecting Talent with Opportunity"</h7>
<p>AMXSOL Talent Solutions is a global staffing, offshore development, ERP solutions, and managed services firm dedicated to providing tailored solutions to meet the unique needs of our clients. With a strong focus on quality and customer satisfaction, AMXSOL Talent Solutions has established itself as a leader in the staffing industry, delivering exceptional talent and strategic services to businesses across various sectors. </p>
</div>

<TalentServices1/>

<Services2/>
</div>
  );
};

export default TalentServicesMain;
