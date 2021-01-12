import React, { useContext } from "react";
import styled from "styled-components";
import { StaysContext } from "../context";

const OverlayBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  z-index: 1;
  border: 1px solid #000;
  background: #ffffff;
`;

const SearchBarBlock = styled.div`
  height: 5.5rem;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  display: flex;
  flex-flow: column;
  flex: 0 1 100rem;
  margin: 5vh 15vw 5vh 15vw;
`;

const SelectionBlock = styled.div`
`;

const SearchBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 5rem;
  justify-content: center;
  margin-bottom: 3rem;

  @media only screen and (min-width: 320px) {
    grid-template-columns: repeat(1, minmax(30rem, 1fr));
    grid-gap: 3rem;
  }

  @media only screen and (min-width: 1440px) and (max-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;
  }

  @media only screen and (min-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;
  }
`;

const SearchText = styled.input.attrs((props) => ({
  type: "text",
}))`
  font-family: "Mulish";
  font-size: 1.4rem;
  outline: 0;
  border: 0;
  border-right: 1px solid #f2f2f2;
  padding-left: 2rem;
  height: 5rem;

  :readonly {
    background: transparent;
  }

  :disabled {
    background: transparent;
  }

  :focus {
    border-radius: 16px;
    box-shadow: 0 0 0 2px #333333;
    z-index: 1;
  }
`;

const SearchGuest = styled.input.attrs((props) => ({
  type: "string",
}))`
  font-family: "Mulish";
  font-size: 1.4rem;
  outline: 0;
  border: 0;
  border-right: 1px solid #f2f2f2;
  padding-left: 2rem;
  height: 5rem;

  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus {
    border-radius: 16px;
    box-shadow: 0 0 0 2px #333333;
  }
`;

const SearchIconBlock = styled.div`
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

const SearchIcon = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #eb5757;
  color: #f2f2f2;
  border-radius: 16px;
  padding: 0 3rem 0 3rem;
`;

const LocationsList = styled.ul`
  display: flex;
  flex-flow: column;
`;

const Location = styled.li`
  display: inline-flex;
  align-items: center;
  margin-top: 2rem;
  cursor: pointer;
`;

const Guests = styled.div``;
const GuestsAdults = styled.div`
  margin-top: 2rem;
`;

const GuestsChild = styled.div`
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 1rem;
  margin: 0 1rem 0 1rem;
  outline: 0;
  border: 1px solid #333333;
  border-radius: 5px;
  background: transparent;
`;

const Overlay = () => {
  const appContext = useContext(StaysContext);
  const {
    allCities,
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
  } = appContext;

  return (
    <>
      {overlay ? (
        <OverlayBlock>
          <SearchBarBlock>
            <SearchBar>
              <SearchText
                onClick={() => handleLocation(locOverlay)}
                placeholder="Select Location"
                value={city ? city + ", Finland" : ""}
                onChange={(city) => {
                  handleCity(city);
                }}
                onKeyDown={(e) => e.preventDefault()}
              />
              <SearchGuest
                onClick={() => handleGuests(guestsOverlay)}
                placeholder="Add guests"
                value={guests > 0 ? guests + " guests" : ""}
                onChange={(guests) => {
                  setGuests(guests + 1);
                }}
                onKeyDown={(e) => e.preventDefault()}
              />
              <SearchIconBlock onClick={() => handleOverlay(overlay)}>
                <SearchIcon>
                  <i className="material-icons">search</i>
                  <h6 style={{ fontSize: "2.4rem", color: "#f2f2f2" }}>
                    Search
                  </h6>
                </SearchIcon>
              </SearchIconBlock>
            </SearchBar>
            <SelectionBlock>
              {" "}
              <SearchBar>
                {locOverlay ? (
                  <LocationsList>
                    {allCities.map((city, index) => (
                      <Location key={city} onClick={() => handleCity(city)}>
                        <i className="material-icons">location_on</i>
                        <h6>
                          {city}
                          {", Finland"}
                        </h6>
                      </Location>
                    ))}
                  </LocationsList>
                ) : (
                  <LocationsList></LocationsList>
                )}
                {guestsOverlay ? (
                  <Guests>
                    <GuestsAdults style={{ marginLeft: "1rem" }}>
                      <h3>
                        <b>Adults</b>
                      </h3>
                      <h6>Ages 13 or above</h6>
                    </GuestsAdults>

                    <GuestsAdults>
                      <Button
                        type="button"
                        onClick={() => {
                          if (guests !== 0 && adult !== 0) {
                            setAdults(adult - 1);
                            setGuests(guests - 1);
                          } else if (guests > 0 && adult === 0) {
                            setAdults(0);
                          } else {
                            setGuests(0);
                          }
                        }}
                      >
                        -
                      </Button>
                      {adult}
                      <Button
                        type="button"
                        onClick={() => {
                          setAdults(adult + 1);
                          setGuests(guests + 1);
                        }}
                      >
                        +
                      </Button>
                    </GuestsAdults>
                    <GuestsChild style={{ marginLeft: "1rem" }}>
                      <h3>
                        <b>Children</b>
                      </h3>
                      <h6>Ages 2-12</h6>
                    </GuestsChild>
                    <GuestsChild>
                      <Button
                        type="button"
                        onClick={() => {
                          if (guests !== 0 && child !== 0) {
                            setChildren(child - 1);
                            setGuests(guests - 1);
                          } else if (guests > 0 && child === 0) {
                            setChildren(0);
                          } else {
                            setGuests(0);
                          }
                        }}
                      >
                        -
                      </Button>
                      {child}
                      <Button
                        type="button"
                        onClick={() => {
                          setChildren(child + 1);
                          setGuests(guests + 1);
                        }}
                      >
                        +
                      </Button>
                    </GuestsChild>
                  </Guests>
                ) : (
                  <Guests></Guests>
                )}
              </SearchBar>
            </SelectionBlock>
          </SearchBarBlock>
        </OverlayBlock>
      ) : (
        ""
      )}
    </>
  );
};

export default Overlay;
