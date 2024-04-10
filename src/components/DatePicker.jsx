import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DataPicker.css'; 



const CustomDatePicker = ({ selectedDate, onChange }) => {
  return (<>
     <p> Select Date and Time </p>
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      inline
      calendarClassName="border rounded-md p-2"
    /> </>
  );
};

export default CustomDatePicker;
