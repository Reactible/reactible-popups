import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PopupDemo from './pages/PopupDemo';

const Intro: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/popup">Popup Demo</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/popup" element={<PopupDemo />} />
          <Route path="/" element={<h1>Welcome to Reactible Popups Demo</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default Intro;
