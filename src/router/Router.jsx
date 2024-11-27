import { BrowserRouter, Routes, Route } from 'react-router-dom';
// layout
import Layout from '../components/layouts/Layout';
// pages
import HomePage from '../pages/HomePage';
import IntroductionPage from '../pages/IntroductionPage';
import DepartmentPage from '../pages/DepartmentPage';
import AdministrationPage from '../pages/AdministartionPage';
import WorshipTimePage from '../pages/WorshipTimePage';
import InstitutionPage from '../pages/InstitutionPage';
import LocationPage from '../pages/LocationPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="/administration" element={<AdministrationPage />} />
          <Route path="/worship-time" element={<WorshipTimePage />} />
          <Route path="/institution" element={<InstitutionPage />} />
          <Route path="/location" element={<LocationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
