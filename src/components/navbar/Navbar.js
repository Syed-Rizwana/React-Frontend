import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Routes, Route, Link } from 'react-router-dom';
import MoreInfo from '../moreinfo/Moreinfo';
import Upload from '../upload/Upload';
import Home from '../home/Home';
import Videos from '../videos/Videos';
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/Videos">Home</Link></li>
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <Link to="/MoreInfo">Projects</Link>
          {showDropdown && (
            <ul className="dropdown-content">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Machine Learning</a></li>
              <li><a href="#">Data Science</a></li>
            </ul>
          )}
        </li>
        <li><Link to="/Upload">Upload</Link></li>
        <li><a href="#">Portfolio</a></li>
    
      </ul>
      <Routes>
      <Route exact path='/Upload' element={<Upload />}></Route>
      <Route exact path='/Navbar' element={<Navbar />}></Route>
      <Route exact path='/MoreInfo' element={<MoreInfo />}></Route>
      <Route exact path='/Videos' element={<Videos />}></Route>
      </Routes>
    </nav>
  );
};

export default Navbar;
