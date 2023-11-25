import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import { Button, Container } from "react-bootstrap";
import { useEffect } from "react";

function Calender() {
  const [startDate, setStartDate] = useState(() => {
    const storedDate = localStorage.getItem("calenderStartDate");
    return storedDate ? new Date(JSON.parse(storedDate)) : new Date();

  });

  const [selectedTime, setSelectedTime] = useState(() => {
    const storedTime = localStorage.getItem("calenderSelectedTime");
    return storedTime ? JSON.parse(storedTime) : "";
  });

  useEffect(() => {
    localStorage.setItem("calenderStartDate", JSON.stringify(startDate));
    localStorage.setItem("calenderSelectedTime", JSON.stringify(selectedTime));
  }, [startDate, selectedTime]);



  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const[activeBtn, setActiveBtn] = useState(1);

  const handleBtnClick = (btnNo,time) => {
      setActiveBtn(btnNo)
      handleTimeChange(time)
  }

  console.log(selectedTime)

  
  return (
    <Container>
      <div className="custom-calendar-container select-pickup-type">
        <h3 className="date-headers">
          When would you like your order to be ready?
        </h3>
        <div className="d-flex">
          <DatePicker
            className="react-datepicker__calendar form-control border-primary"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
          />         

          <div className="mx-5" style={{display: "flex", flexDirection: "column"}}>
            <Button className="booking-time-btn px-5" 
            variant={activeBtn === 1 ? 'primary' : 'light'}
            onClick={() => handleBtnClick(1,"08:00 - 10:00 AM")}
            >
              08:00 - 10:00 AM
            </Button>
            <Button className="booking-time-btn px-5 my-3" 
            variant={activeBtn === 2 ? 'primary' : 'light'}
            onClick={() => handleBtnClick(2,"04:00 - 07:00 PM")}
            >
              04:00 - 07:00 PM
            </Button>
          </div>
        </div>
        {!startDate || !selectedTime ? <div className="color-red">please select date or time</div> : "" }
      </div>
    </Container>
  );
}

export default Calender;
