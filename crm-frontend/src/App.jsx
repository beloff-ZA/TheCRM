import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/HomePage';
import Contact from './pages/ContactPage';
import InternalApp from './pages/InternalApp'; // new file for internal routing and layout

export default function App() {
  return (
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* Internal app with Layout and nested routes */}
        <Route path="/dashboard/*" element={<InternalApp />} />

        {/* Redirect any unknown route to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
}
