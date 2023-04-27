import React from 'react';
import "../styles.css";
import LandingTextBox from "./landingComponents/LandingTextBox";


const ThankYouPage = () => {

  return (
    <div className="wide-section">
      <LandingTextBox
        heading="Thank you for your response!"
        paragraph="Your feedback is greatly appreciated and helps
        us get better every day."
      />
    </div>
  );
};

export default ThankYouPage;
