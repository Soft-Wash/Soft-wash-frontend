import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TimePicker from "react-time-picker";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

function Calender() {
  const [startDate, setStartDate] = useState(() => {
    const storedDate = localStorage.getItem("calenderStartDate");
    return storedDate ? new Date(JSON.parse(storedDate)) : new Date();
  });

  // const startDateTimestamp = startDate.getTime()

  const [selectedTime, setSelectedTime] = useState(() => {
    const storedTime = localStorage.getItem("calenderSelectedTime");
    return storedTime ? JSON.parse(storedTime) : "";
  });

  useEffect(() => {
    localStorage.setItem("calenderStartDate", JSON.stringify(startDate));
    localStorage.setItem("calenderSelectedTime", JSON.stringify(selectedTime));
  }, [startDate, selectedTime]);



  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };


  
  return (
    <Container>
      <div className="custom-calendar-container select-pickup-type">
        <h3 className="date-headers">
          When would you like your order to be ready?
        </h3>
        <DatePicker
          className="react-datepicker__calendar"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
        />

        {/* <label htmlFor="timePicker"></label>
        <input
          type="time"
          id="timePicker"
          name="timePicker"
          value={selectedTime}
          onChange={handleTimeChange}
        /> */}
        {!startDate || !selectedTime ? <div className="color-red">please select date or time</div> : "" }
      </div>
    </Container>
  );
}

export default Calender;
