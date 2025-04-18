import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import SubmitReport from './pages/SubmitReport';
import ViewReports from './pages/ViewReports'



function App() {
  return (
    <div className = "app-container">
      <Sidebar />
      <div className = "main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit" element={<SubmitReport />} />
          <Route path="/reports" element={<ViewReports />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;

