import React from "react";
import contactUsVideo from "./contact-us.mp4"; // Import the video from the components folder
import additionalImage from "./additional-image.jpg"; // Import the additional image
import logoImage from "./logo.png"; // Import the logo image
import { Link } from "react-router-dom";

const ContactUsnew = () => {
  return (
    <div className="flex flex-col relative top-[60px]">
      {/* Video Section */}
      <div className="relative w-full h-[60vh]">
        <video
          src={contactUsVideo}
          alt="Contact Us"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />

        {/* Overlay Text on Video */}
        <div className="absolute top-4 left-4 sm:left-8 text-white w-full sm:w-[70%]">
          <div className="flex flex-col text-4xl sm:text-6xl font-bold leading-tight">
            <span>What’s on your</span>
            <span>mind?</span>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="absolute top-4 right-4 sm:right-8 text-yellow-300 w-full sm:w-[40%]">
          <p className="text-base sm:text-lg mb-6">
            We’re here to help! Tell us what you’re looking for and we’ll get
            you connected to the right people.
          </p>
          <div className="flex flex-col space-y-2">
            <button onClick={()=>window.location.href='/Businesssolution'} className="border border-white bg-transparent text-white py-2 px-4 hover:bg-black hover:text-white transition w-full sm:max-w-[300px]">
              Business Solutions
            </button>
            <button onClick={()=>window.location.href='/techsolutions'} className="border border-white bg-transparent text-white py-2 px-4 hover:bg-black hover:text-white transition w-full sm:max-w-[300px]">
              Technology Solutions
            </button>
            <button onClick={()=>window.location.href='/talent'} className="border border-white bg-transparent text-white py-2 px-4 hover:bg-black hover:text-white transition w-full sm:max-w-[300px]">
              Talent Solutions
            </button>
            <p className="text-base sm:text-lg mt-6">
              Looking for something else?
            </p>
            <button className="border border-white bg-transparent text-white py-2 px-4 hover:bg-black hover:text-white transition w-full sm:max-w-[300px]">
              <Link to="/contact">Request for Services</Link>
            </button>
          </div>
        </div>

        {/* Bottom Left Contact Info */}
        <div className="absolute bottom-4 left-4 sm:left-8 text-white text-xs sm:text-sm">
          <p className="mb-1">
            Contact us for <span className="text-red-500">∞</span> infinite
            possibilities
          </p>
          <p className="mb-1">
            Business Solutions | Technology Solutions | Talent Solutions
          </p>
          <p>
            Connect with us on: <span className="mr-2">in</span>
            <span className="mr-2">X</span>
            <span className="mr-2">f</span>
            <span className="mr-2">Y</span>
            <span className="mr-2">✆</span>
            <span className="mr-2">✉</span>
            <span className="mr-2">🕸</span>
          </p>
        </div>
      </div>

      {/* Additional Image Section Below Video */}
      <div className="relative w-full h-[40vh] mt-2">
        <img
          src={additionalImage}
          alt="Additional Info"
          className="w-full h-full object-cover"
        />

        {/* Logo and Information Overlay */}
        <div className="absolute top-4 left-4 sm:left-8">
          <img src={logoImage} alt="Logo" className="w-20 sm:w-24 h-auto" />
        </div>
        <div className="absolute top-4 right-4 sm:right-8 text-white w-full sm:w-[40%]">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            USA Global Corporate Headquarters
          </h2>
          <div className="flex flex-col space-y-4">
            <button className="border border-white bg-transparent text-white py-2 px-4 hover:bg-black hover:text-white transition w-full sm:max-w-[400px]">
              1000 Northbrook Drive, Suite 100, Trevose PA 19053 USA
            </button>
            <button className="border border-white bg-transparent text-white py-2 px-4 hover:bg-black hover:text-white transition w-full sm:max-w-[400px]">
              Email Us: info@amxsol.com
            </button>
            <button className="border border-white bg-transparent text-white py-2 px-4 hover:bg-black hover:text-white transition w-full sm:max-w-[400px]">
              Call Us now: +1 (215) 268-6168
            </button>
          </div>
        </div>
      </div>

      {/* Contact Information Section Below Image */}
      {/* Add this section if you have additional contact information to display */}
    </div>
  );
};

export default ContactUsnew;
