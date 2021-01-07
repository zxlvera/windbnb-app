import React, { useContext } from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import { StaysContext } from "../context";

const HeaderBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const Logo = styled.img`
  padding-right: 5rem;
  margin-bottom: 2rem;
  flex: 0 1 10rem;
`;

const SearchBarBlock = styled.div`
  height: 5.5rem;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  flex: 0 1 40rem;
`;

const SearchBar = styled.form`
  height: 5.5rem;
  display: grid;
  grid-template-columns: 1fr 10rem 5rem;
  justify-content: center;
`;

const SearchText = styled.input.attrs((props) => ({
  type: "text",
}))`
  font-family: "Mulish";
  font-size: 1.4rem;
  outline: 0;
  border: 0;
  border-right: 1px solid #f2f2f2;
  margin-left: 2rem;
`;

const SearchGuest = styled.input.attrs((props) => ({
  type: "number",
}))`
  font-family: "Mulish";
  font-size: 1.4rem;
  color: #bdbdbd;
  outline: 0;
  border: 0;
  border-right: 1px solid #f2f2f2;
  margin-left: 1.5rem;

  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const SearchIcon = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
`;

const Header = () => {
  const appContext = useContext(StaysContext);
  const { data } = appContext;
  return (
    <>
      <HeaderBlock>
        <Logo src={logo} alt="Logo" />
        <SearchBarBlock>
          <SearchBar>
            <SearchText placeholder="Helsinki, Finland" />
            <SearchGuest placeholder="Add guests" />
            <SearchIcon>
              <i style={{ color: "#eb5757" }} className="material-icons">
                search
              </i>
            </SearchIcon>
          </SearchBar>
        </SearchBarBlock>
      </HeaderBlock>
      <TitleBlock>
        <h1>Stays in Finland</h1>
        <h3>{data.length} Stays</h3>
      </TitleBlock>
    </>
  );
};
export default Header;
