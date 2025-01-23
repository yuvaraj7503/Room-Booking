import React from "react";
import "./Header.css";
const Header = () => {
  const handleClick = () => {alert("Booking Successful !")};
  return (
    <div>
      <div className="texts">
        <h1>In A Great Hotel,You Dont't </h1>
        <h1>Just Sleep,You Belong</h1> <br></br>
        <p>
          Find your perfect stay with ease explore a wide range of rooms, grab
          great{" "}
        </p>
        <p> deals, and book your ideal getaway today</p>
        <br></br>
        <br></br>
        <div className="book">
          <input type="date" />
          <input type="date" />
          <select>
            <option>2 Persons</option>
            <option>3 Persons</option>
            <option>4 Persons</option>
          </select>
          <button onClick={handleClick}> Book Now</button>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Header;
