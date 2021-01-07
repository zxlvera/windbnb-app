import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

const TitleBlock = styled.div`
  margin-bottom: 3rem;
`;
const Logo = styled.img`
  width: 8rem;
  margin-bottom: 2rem;
`;

const SearchBar = styled.div`
  width: 30rem;
  height: 5.5rem;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
`;

const SearchText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #f2f2f2;
  font-size: 1.4rem;
`;

const SearchGuest = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #f2f2f2;
  font-size: 1.4rem;
  color: #bdbdbd;
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eb5757;
`;

const Header = () => (
  <>
    <HeaderBlock>
      <Logo src={logo} alt="Logo" />
      <SearchBar>
        <SearchText>
          <div>Helsinki, Finland</div>
        </SearchText>
        <SearchGuest>Add Guest</SearchGuest>
        <SearchIcon>
          <i className="material-icons">search</i>
        </SearchIcon>
      </SearchBar>
    </HeaderBlock>
    <TitleBlock>
      <h1>Stays in Finland</h1>
    </TitleBlock>
  </>
);

export default Header;
