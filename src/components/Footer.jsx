import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Team0910. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  height: 30px;
  background: #7196c9;
  background-size: cover;
  padding: 1em;
`;

const FooterText = styled.p`
  text-align: center;
  color: #ffffff;
`;
