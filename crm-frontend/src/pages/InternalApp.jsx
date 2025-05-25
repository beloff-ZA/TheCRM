import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import StaffDashboard from './StaffDashboard';
import Contact from './ContactPage';
// Add other internal pages as needed

export default function InternalApp() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<StaffDashboard />} />
        <Route path="contact" element={<Contact />} />
        {/* add more internal routes here, e.g.: */}
        {/* <Route path="finance" element={<FinancePage />} /> */}
      </Routes>
    </Layout>
  );
}
