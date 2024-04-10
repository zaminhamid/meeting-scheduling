
import './MeetingDetailsForm.css'; 
import React, { useState } from 'react';
const MeetingDetailsForm = ({ name, email, companySize, role, handleChange, handleRoleChange }) => {
  const [showGuestFields, setShowGuestFields] = useState(false); // State to manage the visibility of guest fields

  return (
  
  	 <div className="formContainer">
  	<div className ="info">
  	
  	</div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    <div className="general">
    <div> Enter Details</div>
      <div className="meeting">
        <label htmlFor="name" className="block font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="meeting">
        <label htmlFor="email" className="block font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      
      <button className="buttonguest" onClick={() => setShowGuestFields(true)}> {/* Button to show guest fields */}
        Add Guests
      </button>

      {/* Conditional rendering of guest fields */}
      {showGuestFields && (
        <div className="guestFields">
          <div className="guestInput">
            <label htmlFor="guestName">Guest Name:</label>
            <input type="text" id="guestName" name="guestName" />
          </div>
          <div className="guestInput">
            <label htmlFor="guestEmail">Guest Email:</label>
            <input type="email" id="guestEmail" name="guestEmail" />
          </div>
        </div>
      )}















      <div className="details">
      	
      <legend> I Want Fibery to Work for *</legend>

      <div>
        <input type="checkbox" id="scales" name="scales" defaultChecked />
        <label htmlFor="scales"> 🥕️Myself </label>
      </div>

      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label htmlFor="horns">  🇫🇲️ 1 to 10 people </label>
      </div>
      
      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label htmlFor="horns">🌊️ 10 to 50 people </label>
      </div>
      
       <div>
        <input type="checkbox" id="horns" name="horns" />
        <label htmlFor="horns">🦅️ 50 people  </label>
      </div>
    
    
    
    
   
      <legend> You are more about *</legend>

      <div>
        <input type="checkbox" id="scales" name="scales" defaultChecked />
        <label htmlFor="scales">🕴️ Leadership  </label>
      </div>

      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label htmlFor="horns">  👬️Consulting  </label>
      </div>
      
      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label htmlFor="horns"> 🎨️Design </label>
      </div>
      
       <div>
        <input type="checkbox" id="horns" name="horns" />
        <label htmlFor="horns"> 🖥️Engeerning </label>
      </div>
       <div>
        <input type="checkbox" id="horns" name="horns" />
        <label htmlFor="horns"> ❔️ Something else</label>
      </div>
    
      
        
             
    </div>
    
     <div className="help">
      <label htmlFor="name">please share anything that will help for the meeting:</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        required 
        minLength={4} 
        maxLength={60} 
        size={24} 
      />
    </div>
    
    
      <div className="help">
      <label htmlFor="name">please share the name of work:</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        required 
        minLength={4} 
        maxLength={60} 
        size={24} 
      />
      
      
    </div>
    
    
    
    
    
    
 </div>   
</div>
);  
};

export default MeetingDetailsForm;
