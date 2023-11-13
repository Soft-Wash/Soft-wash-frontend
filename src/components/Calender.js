import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TimePicker from "react-time-picker";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

function Calender() {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    const storedDate = localStorage.getItem("storedDate");
    const StoredSelectedTime = localStorage.getItem("selectedTime");

    setStartDate(storedDate ? new Date(storedDate) : new Date());
    if (StoredSelectedTime !== null) {
      setSelectedTime(StoredSelectedTime);
    } else {
      setSelectedTime(new Date());
    }
  }, []);

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSaveToLocalStorage = () => {
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("selectedTime", selectedTime);
  };

  handleSaveToLocalStorage();
  
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

        <label htmlFor="timePicker"></label>
        <input
          type="time"
          id="timePicker"
          name="timePicker"
          value={selectedTime}
          onChange={handleTimeChange}
        />
        {!startDate || !selectedTime ? <div className="color-red">please select date or time</div> : "" }
      </div>
    </Container>
  );
}

export default Calender;
