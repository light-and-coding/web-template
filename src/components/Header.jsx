import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.jpeg';
import headerBg from '../assets/images/headerBg.jpg';

const Header = () => {
  const navigate = useNavigate();

  const MENUS = [
    { name: '소개', link: '/introduction ' },
    { name: '교육부서', link: '/department' },
    { name: '행정', link: '/administration' },
    { name: '예배시간', link: '/worship-time' },
    { name: '기관', link: '/institution' },
    { name: '오시는길', link: '/location' },
  ];

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <HeaderMenu>
        <HeaderLogoButton onClick={handleLogoClick}>
          <HeaderLogoImage src={logo} alt="logo" />
        </HeaderLogoButton>
        {MENUS.map((menu) => (
          <li key={menu.link}>
            <Link to={menu.link}>{menu.name}</Link>
          </li>
        ))}
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  height: 50px;
  background: linear-gradient(to right, #7196c9, #ffffff);
  /* url(${headerBg}); 백그라운드 이미지 추가 */
  background-size: cover;
  padding: 1em;
  display: flex;
  gap: 2em;
`;

const HeaderLogoButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const HeaderLogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;

  > li {
    list-style: none;
    > a {
      text-decoration: none;
      color: #0a3268;
      font-size: 1.2em;
      font-weight: bold;
    }

    > a:hover {
      color: #4b5869;
    }
  }
`;
