import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";

const GridHeader = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: left;
`
const Logo = styled.img`
  width: 8rem;
  margin-bottom: 4rem;
`;

const Header = () => (
  <>
    <GridHeader>
      <Logo src={logo} alt="Logo" />
      <h1>Stays in Finland</h1>
    </GridHeader>
  </>
);

export default Header;
