// reactible-popups/example/DemoComponent.tsx
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Popup01Demo from "./pages/Popup01Demo";

const DemoComponent: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/popup01">Popup01 Demo</Link>
            </li>
            {/* Add more links here as we create more demo pages */}
          </ul>
        </nav>

        <Routes>
          <Route path="/popup01" element={<Popup01Demo />} />
          <Route path="/" element={<h1>Welcome to Reactible Popups Demo</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default DemoComponent;
