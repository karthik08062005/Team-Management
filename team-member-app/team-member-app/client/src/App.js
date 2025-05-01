import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddMember from './components/AddMember';
import ViewMembers from './components/ViewMembers';
import MemberDetails from './components/MemberDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-content">
            <Link to="/" className="nav-logo">
              Team Manager
            </Link>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add">Add Member</Link>
              </li>
              <li>
                <Link to="/members">View Members</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddMember />} />
            <Route path="/members" element={<ViewMembers />} />
            <Route path="/members/:id" element={<MemberDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
