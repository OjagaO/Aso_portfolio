import './componets/reset.css';
import Index from './componets/Index.jsx';
import AboutPage from './componets/About.jsx';
import WorkPage from './componets/Work.jsx';
import ContactPage from './componets/Contact.jsx';
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  return (
    <div className="app">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/work' element={<WorkPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
