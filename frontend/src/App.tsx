
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import LoginPage from './login/LoginPage';
import SigninPage from './signin/SigninPage';
import AboutPage from './about/AboutPage';
import ContactPage from './contact/ContactPage';
import GuidePage from './guide/GuidePage';
import AddTrilha from './trilha/AddTrilha';
import PinPage from './pin/PinPage';
import MuralPage from './mural/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/trilha" element={<AddTrilha />} />
        <Route path="/pin" element={<PinPage />} />
        <Route path="/mural" element={<MuralPage />} />
      </Routes>
    </Router>
  );
}

export default App;
