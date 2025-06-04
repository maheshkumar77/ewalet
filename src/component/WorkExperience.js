import React from 'react';
import './WorkExperience.css';

function WorkExperience() {
  return (
    <div className="work-experience">
      <h3>Work Experience</h3>
      <form>
        <label>Previous Job Titles</label>
        <input type="text" placeholder="Enter your previous job titles" />

        <label>Years of Experience per Job Title</label>
        <input type="number" placeholder="Enter years of experience" />

        <label>Company Names and Industry</label>
        <input type="text" placeholder="Enter company names and industry" />

        <label>Start and End Dates</label>
        <input type="date" />

        <label>Responsibilities and Achievements</label>
        <textarea placeholder="Describe your responsibilities and achievements" />

        <label>Technologies/Tools Used</label>
        <input type="text" placeholder="Enter technologies/tools used" />

        <label>Projects Worked On (Detailed descriptions, project outcomes)</label>
        <textarea placeholder="Describe projects worked on" />
      </form>
    </div>
  );
}

export default WorkExperience;