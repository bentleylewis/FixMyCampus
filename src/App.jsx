import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/sidebar';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import SubmitReport from './pages/SubmitReport';
import ViewReports from './pages/ViewReports'



function App() {
  const [reports, setReports] = useState([]);
  return (
    <div className = "app-container">
      <Sidebar />
      <div className = "main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit" element={<SubmitReport reports={reports} setReports={setReports} />} />
          <Route path="/reports" element={<ViewReports reports={reports} />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;

