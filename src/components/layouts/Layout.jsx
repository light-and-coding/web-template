import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    flex: 1;
  }
`;
