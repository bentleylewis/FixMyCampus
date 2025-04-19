import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; // <-- new
import './App.css';
import backgroundImg from './assets/background23.png';


import Home from './pages/Home';
import About from './pages/About';
import SubmitReport from './pages/SubmitReport';
import ViewReports from './pages/ViewReports';

function App() {
  const [reports, setReports] = useState([]);

  return (
    <div className="app">
      <header className="header">
        <h1 className="main-title">Fix My Campus</h1>
        <h2 className="subtitle">OKState</h2>
      </header>

      <Navbar /> {/* <-- navigation menu */}

      { <div className="container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/submit"
              element={<SubmitReport reports={reports} setReports={setReports} />}
            />
            <Route path="/reports" element={<ViewReports reports={reports} />} />
          </Routes>
        </main>
      </div> }

      <footer className="footer">
        <p>© 2025 Oklahoma State University</p>
      </footer>
    </div>
  );
}

export default App;
