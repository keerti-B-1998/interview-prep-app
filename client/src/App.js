import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css'; 

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Interview from './components/Interview';
import Course from './components/Course';
import Quiz from './components/Quiz';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <>
        <div className="main-container">
        <div className="left-menu">
            <div className="logo">
              <img src="./logo.png" alt="" />
              <span>
                <Link to="/">Dashboard</Link>
              </span>
            </div>
            <ul>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/">
                  <i className="fa-solid fa-house"></i> Home
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/AboutUs">
                  <i className="fa-solid fa-user"></i> AboutUs
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/Interview">
                  <i className="fa-solid fa-file"></i> Interview
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/Course">
                  <i className="fa-solid fa-store"></i> Course
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/Quiz">
                  <i className="fa-solid fa-calendar-days"></i> Quiz
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/Contact">
                  <i className="fa-solid fa-message"></i> Contact
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/Signup">
                  <i className="fa-solid fa-rocket"></i> Signup
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/Login">
                  <i className="fa-solid fa-rocket"></i> Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="right-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Interview" element={<Interview />} />
              <Route path="/Course" element={<Course />} />
              <Route path="/Quiz" element={<Quiz />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </>
    </Router>
    
  );
};

export default App;
