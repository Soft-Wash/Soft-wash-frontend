import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TimePicker from 'react-time-picker'
import { Container } from "react-bootstrap";


function Calender(){

    const [startDate, setStartDate] = useState(new Date());

    const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);}

  return (
    <Container>
        
        <div className="custom-calendar-container select-pickup-type">
            <h3 className="date-headers">When would you like your order to be ready?</h3>
            <DatePicker 
            className="react-datepicker__calendar" 
            selected={startDate} 
            onChange={(date) => setStartDate(date)}
            minDate={new Date} />

            <label htmlFor="timePicker"></label>
            <input
                type="time"
                id="timePicker"
                name="timePicker"
                value={selectedTime}
                onChange={handleTimeChange}
            />
            {/* <p>Selected Time: {selectedTime}</p> */}
        </div>
    </Container>
    );
}


export default Calender;




// import React, { useState } from 'react';
// import DatePicker from 'react-bootstrap-date-picker';
// import './CustomCalendar.css'; // Import your custom CSS

// function Calendar() {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   return (
//     <div>
//       <h1>Calendar</h1>
//       <DatePicker
//         value={selectedDate.toISOString()}
//         onChange={(date) => setSelectedDate(new Date(date))}
//         calendarPlacement="bottom" // Adjust the position as needed
//       />
//     </div>
//   );
// }

// export default Calendar;





// import React, { useState } from 'react';
// import DatePicker from 'react-bootstrap-date-picker';
// import "react-datepicker/dist/react-datepicker.css";


// function Calendar() {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   return (
//     <div>
//       <h1>Calendar</h1>
//       <DatePicker
//         className="datepicker" 
//         value={selectedDate.toISOString()}
//         onChange={(date) => setSelectedDate(new Date(date))}
//         calendarPlacement="bottom" 
//         calendarClassName="datepicker-inline"
//       />
//     </div>
//   );
// }

// export default Calendar;

