import React, { useState } from "react";
import { staysData } from "../stays";

// Create Context
const StaysContext = React.createContext();

// Create Provider
const StaysProvider = (props) => {
  // Initialize Data
  const [data, setData] = useState(staysData);
  const [overlay, setFullOverlay] = useState(false);
  const [locOverlay, setLocOverlay] = useState(false);
  const [guestsOverlay, setGuestsOverlay] = useState(false);
  const [city, setCity] = useState("");
  const [guests, setGuests] = useState(0);
  const [adult, setAdults] = useState(0);
  const [child, setChildren] = useState(0);

  const listOfCities = data.map((item) => {
    return item.city;
  });

  const [allCities] = useState([...new Set(listOfCities)]);

  const handleData = (city, guests) => {
    let filteredData = staysData.filter(function (item) {
      if (city && guests === 0) {
        return item.city === city;
      } else if (city && guests > 0) {
        return item.city === city && item.maxGuests >= guests;
      } else if (!city && guests === 0) {
        return item;
      } else if (!city && guests > 0) {
        return item.maxGuests >= guests;
      }
      return null;
    });
    setData(filteredData);
  };

  const handleOverlay = (overlay) => {
    setFullOverlay(!overlay);
    setLocOverlay(false);
    setGuestsOverlay(false);
  };

  const handleLocation = (e, locOverlay) => {
    setLocOverlay(true);
    setGuestsOverlay(false);
  };

  const handleGuests = (guestsOverlay) => {
    setGuestsOverlay(true);
    setLocOverlay(false);
  };

  const handleCity = (city) => {
    setCity(city);
  };

  return (
    <StaysContext.Provider
      value={{
        allCities,
        data,
        handleData,
        overlay,
        handleOverlay,
        locOverlay,
        handleLocation,
        guestsOverlay,
        handleGuests,
        city,
        handleCity,
        guests,
        setGuests,
        adult,
        setAdults, 
        child,
        setChildren,
      }}
    >
      {props.children}
    </StaysContext.Provider>
  );
};

export { StaysProvider, StaysContext };
