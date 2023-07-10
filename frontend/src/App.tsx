
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
import ActivityPage from './activity/ActivityPage';
import ActivityPage2 from './activity/ActivityPage2';
import ActivityPage3 from './activity/ActivityPage3';
import ReportsPage from './activity/ReportsPage';
import FinishPage from './activity/FinishPage';
import NoTimePage from './activity/NoTimePage';
import InsertPin from './pin/InsertPin';

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
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/activity2" element={<ActivityPage2 />} />
        <Route path="/activity3" element={<ActivityPage3 />} />
        <Route path="/finish" element={<FinishPage />} />
        <Route path="/timeisup" element={<NoTimePage />} />
        <Route path="/insertPin" element={<InsertPin />} />
        <Route path="/results" element={<ReportsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
