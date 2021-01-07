import React from "react";
import styled from "styled-components";

const FooterBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FooterText = styled.div`
  padding: 2rem;
  width: 40%;
  border-top: 1px solid #bdbdbd;
  display: flex;
  justify-content: center;
`;

const FooterLink = styled.a`
  text-decoration: none;

  :visited {
    color: #bdbdbd;
  }

  :hover {
    color: #333333;
  }
`;
const Footer = () => (
  <FooterBlock>
    <FooterText>
      <h2>
        <FooterLink href="http://github.com/zxlvera">
          Vera @ DevChallenges.io
        </FooterLink>
      </h2>
    </FooterText>
  </FooterBlock>
);

export default Footer;
