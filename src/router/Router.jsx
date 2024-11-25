import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
