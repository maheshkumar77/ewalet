import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Redstring</h2>
      <ul>
        <li>Personal Information</li>
        <li>Skills & Expertise</li>
        <li>Education</li>
        <li>Work Experience</li>
        <li>Portfolio & References</li>
        <li>Preferred Work Terms</li>
        <li>Language Proficiency</li>
      </ul>
    </div>
  );
}

export default Sidebar;