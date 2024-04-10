





import React from 'react';
import GoogleLogo from './google-icon.jpg'; // Import Google logo
import MicrosoftLogo from './microsoft-logo.png'; // Import Microsoft logo
import './ScheduledEventConfirmation.css'; // Import CSS file for styling
import xam from './xam.jpeg'
const ScheduledEventConfirmation = ({ date, time, timeZone }) => {
  return (
    <div className="confirmation-card">
    	<img src={xam} alt="Microsoft Logo" className="logo" style={{ width: "44px", height: "44px", borderRadius: "50%", marginLeft: "22vw" }} />


      <h2> ✔️ You Are Scheduled</h2>
      <p style={{textAlign:"center" }}>A calendar event has been mailed to your email.</p>
        <hr/>
      
  <h3>Fibery Demo</h3>
  <p>👤 Polina Zenevich</p>
  <p>📅️ {date} at {time}</p>
  <p>🌐️ {timeZone}</p>
  <p>📽️ Web Conference Details to follow</p>
   <hr/>


      <p style={{ textAlign:"center" }}> Schedule Your Own Meetings with   Calendly for Free </p>
      <p style={{ textAlign:"center" }}> Elimnate the back and forth emails for finding time. </p>
      <div className="button-container">
        <button className="google-button">
          <img src={GoogleLogo} alt="Google Logo" className="logo" />
          Enter with Google Account
        </button>
        <button className="microsoft-button">
          <img src={MicrosoftLogo} alt="Microsoft Logo" className="logo" />
          Enter with Microsoft Account
        </button>
        
      </div>
       <div className="mr"> Sign up with work  email </div>
    </div>
  );
};

export default ScheduledEventConfirmation;

