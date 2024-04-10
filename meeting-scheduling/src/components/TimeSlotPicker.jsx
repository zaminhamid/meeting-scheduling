import React, { useState } from 'react';
import './TimeSlotPicker.css'; 

const TimeSlotPicker = ({ selectedTime, onChange }) => {
  const [selectedTimeZone, setSelectedTimeZone] = useState('');

  const handleTimeZoneChange = (e) => {
    const { value } = e.target;
    setSelectedTimeZone(value);
  };

  const timeSlots = ['09:00', '10:00', '10:30', '11:00', '11:30', '12:00'];

  return (
    <div className="time-slot-picker">
      <div className="calendar-container">
        <label className="block font-bold mb-1">Time zone</label>
        <select className="border rounded-md p-1" onChange={handleTimeZoneChange} value={selectedTimeZone}>
          <option value="">Select time zone</option>
          <option value="UK">UK, Ireland, Lisbon Time (16:55)</option>
         
        </select>
      </div>
      {selectedTimeZone && (
        <>
          <div className="time-slots-container">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={`time-slot-button ${
                  selectedTime === slot ? 'selected' : ''
                }`}
                onClick={() => onChange(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TimeSlotPicker;

