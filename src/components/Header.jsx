import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";

const HeaderBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`
const Logo = styled.img`
  width: 8rem;
  margin-bottom: 2rem;
`;

const Header = () => (
  <>
    <HeaderBlock>
      <Logo src={logo} alt="Logo" />
      <h1>Stays in Finland</h1>
    </HeaderBlock>
  </>
);

export default Header;
