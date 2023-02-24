import './componets/reset.css';
import Index from './componets/Index.jsx';
import AboutPage from './componets/About.jsx';
import WorkPage from './componets/Work.jsx';
import ContactPage from './componets/Contact.jsx';
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  const homeUrl = process.env.PUBLIC_URL;

  return (
    <div className="app">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path={ homeUrl } element={<Index />} />
            <Route path={ homeUrl + "/about" } element={<AboutPage />} />
            <Route path={ homeUrl + '/work' } element={<WorkPage />} />
            <Route path={ homeUrl + '/contact' } element={<ContactPage />} />
            <Route path="*" element={<Index />} />
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
