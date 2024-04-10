import React, { useState } from 'react';
import Header from './components/Header';
import MeetingDetailsForm from './components/MeetingDetailsForm';
import DateTimePicker from './components/DateTimePicker';
import ScheduledEventConfirmation from './components/ScheduledEventConfirmation';
import './App.css';
import log from './components/log.png';

function App() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('account@refero.design');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showMeetingDetails, setShowMeetingDetails] = useState(false);
  const [showScheduledConfirmation, setShowScheduledConfirmation] = useState(false); // State for showing confirmation
  const [displayedDateTime, setDisplayedDateTime] = useState(null); // State for displaying selected date and time

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };
const formattedDate = selectedDate ? selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : null;


const handleNext = () => {
  setShowMeetingDetails(true);
  if (selectedDate && selectedTime) {
    // Convert selected time to the UK/Lisbon time zone
    const timeParts = selectedTime.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const selectedDateTime = new Date(selectedDate);
    selectedDateTime.setUTCHours(hours); // Use setUTCHours to avoid local time zone conversion
    selectedDateTime.setUTCMinutes(minutes); // Use setUTCMinutes to avoid local time zone conversion
    const formattedDateTime = selectedDateTime.toLocaleString('en-GB', { timeZone: 'Europe/Lisbon', dateStyle: 'full', timeStyle: 'short' });
    setDisplayedDateTime(formattedDateTime);
  }
};




  const handleScheduleEvent = () => {
    setShowMeetingDetails(false);
    setShowScheduledConfirmation(true); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      
      <Header />
      
      
      
      <div className="container"> {/* Container for the cards */}
        {!showScheduledConfirmation && (
          <div className="card">
            <div className="info">
              <div>
                <img src={log} alt="Microsoft Logo" className="logo" style={{ width: "84px", height: "84px", borderRadius: "50%", marginLeft: "2vw" }} />
                <h1>Fibery Demo</h1>
                <h6>🕓️45min </h6>
              </div>
              <div className="moreinfo">
                <p>{displayedDateTime && <span>  Date: {displayedDateTime.split(' at ')[0]}</span>}</p>
                <p>{displayedDateTime && <span> UK Lisbon Time: {displayedDateTime.split(' at ')[1]}</span>}</p>
                <p>Book a meeting with our Fiberty Team</p>
                <p>Talk to a real person about how to access your progress</p>
                <br />
                <p>Cookie setting </p>
              </div>
            </div>
          </div>
        )}
        {!showScheduledConfirmation && (
          <div className="card">
            {!showMeetingDetails ? (
              <DateTimePicker
                selectedDate={selectedDate}
                onChangeDate={setSelectedDate}
                selectedTime={selectedTime}
                onChangeTime={setSelectedTime}
              />
            ) : (
              <MeetingDetailsForm
                name={name}
                email={email}
                handleChange={handleChange}
              />
            )}
            {!showMeetingDetails && (
              <button
                type="button"
                onClick={handleNext}
                className="nextbutton"
              >
                Next
              </button>
            )}
            {showMeetingDetails && (
              <button
                type="button"
                onClick={handleScheduleEvent}
                className="event"
              >
                Schedule Event
              </button>
            )}
          </div>
        )}
     {showScheduledConfirmation && <ScheduledEventConfirmation date={formattedDate} time={selectedTime} timeZone="UK, Ireland, Lisbon Time " />}

      </div>
    </div>
  );
}

export default App;

