import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import Blog4 from './pages/Blog4';
import Blog5 from './pages/Blog5';
import Blog6 from './pages/Blog6';
import Blog7 from './pages/Blog7';
import Blog8 from './pages/Blog8';
import Blog9 from './pages/Blog9';
import Blog10 from './pages/Blog10';
import Signup from './pages/signup';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogpage from './pages/Blogpage';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Blog App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog1">Blog 1</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog2">Blog 2</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog3">Blog 3</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog4">Blog 4</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog5">Blog 5</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog6">Blog 6</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog7">Blog 7</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog8">Blog 8</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog9">Blog 9</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog10">Blog 10</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content Routes */}
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Blogpage/>} />
            <Route path="/blog1" element={<Blog1 />} />
            <Route path="/blog2" element={<Blog2 />} />
            <Route path="/blog3" element={<Blog3 />} />
            <Route path="/blog4" element={<Blog4 />} />
            <Route path="/blog5" element={<Blog5 />} />
            <Route path="/blog6" element={<Blog6 />} />
            <Route path="/blog7" element={<Blog7 />} />
            <Route path="/blog8" element={<Blog8 />} />
            <Route path="/blog9" element={<Blog9 />} />
            <Route path="/blog10" element={<Blog10 />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;