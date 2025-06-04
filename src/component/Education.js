import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education">
      <h3>Education</h3>
      <form>
        <label>College Degree(s) (Current or Past)</label>
        <input type="text" placeholder="Enter your degree" />

        <label>Field of Study</label>
        <input type="text" placeholder="Enter your field of study" />

        <label>Graduation Dates</label>
        <input type="date" />

        <label>GPA/Academic Performance</label>
        <input type="text" placeholder="Enter your GPA or academic performance" />
      </form>
    </div>
  );
}

export default Education;