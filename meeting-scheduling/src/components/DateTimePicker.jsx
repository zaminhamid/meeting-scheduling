import React from 'react';
import DatePicker from './DatePicker';
import TimeSlotPicker from './TimeSlotPicker';
import './DateTimePicker.css';

const DateTimePicker = ({ selectedDate, onChangeDate, selectedTime, onChangeTime }) => {
  return (
    <div className="dateTimePickerContainer">
      <div className="dateTimePickerColumn">
        <DatePicker selectedDate={selectedDate} onChange={onChangeDate} />
      </div>
      <div className="dateTimePickerColumn">
        <TimeSlotPicker selectedTime={selectedTime} onChange={onChangeTime} />
      </div>
    </div>
  );
};

export default DateTimePicker;

