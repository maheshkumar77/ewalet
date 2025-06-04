import React from 'react';
import './SkillsExpertise.css';

function SkillsExpertise() {
  return (
    <div className="skills-expertise">
      <h3>Skills & Expertise</h3>
      <form>
        <label>Primary Skills</label>
        <input type="text" placeholder="e.g., programming languages, design tools" />

        <label>Proficiency Levels</label>
        <select>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <label>Years of Experience per Skill</label>
        <input type="number" placeholder="Enter years of experience" />

        <label>Secondary Skills</label>
        <input type="text" placeholder="Enter secondary skills" />

        <label>Proficiency Levels</label>
        <select>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <label>Years of Experience per Skill</label>
        <input type="number" placeholder="Enter years of experience" />

        <label>Upload Certifications and Credentials (Max 10MB)</label>
        <input type="file" />
      </form>
    </div>
  );
}

export default SkillsExpertise;